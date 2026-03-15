import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import User from "../models/user.model.js";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await Promise.all([conversation.save(), newMessage.save()]);

		// Send user's message to receiver via socket
		const receiverSocketId = getReceiverSocketId(receiverId.toString());
		if (receiverSocketId) {
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);

		// ── AI BOT LOGIC ──
		const receiver = await User.findById(receiverId);

		if (receiver && receiver.username === "ai-assistant") {

			const history = await Message.find({
				_id: { $in: conversation.messages },
			})
				.sort({ createdAt: -1 })
				.limit(10)
				.lean();

			history.reverse();

			const groqMessages = [
				{
					role: "system",
					content: "You are a helpful assistant in ChatiFy. Keep replies short.",
				},
				...history.map((msg) => ({
					role: msg.senderId.toString() === receiverId.toString()
						? "assistant"
						: "user",
					content: msg.message,
				})),
			];

			const groqRes = await groq.chat.completions.create({
				model: "llama-3.3-70b-versatile",
				messages: groqMessages,
				max_tokens: 1024,
			});

			const aiText = groqRes.choices[0].message.content;

			const aiMessage = new Message({
				senderId: receiverId,
				receiverId: senderId,
				message: aiText,
			});

			conversation.messages.push(aiMessage._id);
			await Promise.all([aiMessage.save(), conversation.save()]);

			// Convert to string so socket map lookup works correctly
			const senderSocketId = getReceiverSocketId(senderId.toString());
			if (senderSocketId) {
				io.to(senderSocketId).emit("newMessage", aiMessage);
			}
		}

	} catch (error) {
		console.log("Error in sendMessage controller:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");

		if (!conversation) return res.status(200).json([]);

		res.status(200).json(conversation.messages);
	} catch (error) {
		console.log("Error in getMessages controller:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};