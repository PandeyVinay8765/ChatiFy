import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getSuggestions = async (req, res) => {
	try {
		const { messages } = req.body;

		const transcript = messages
			.map((m) => `${m.fromMe ? "Me" : "Them"}: ${m.message}`)
			.join("\n");

		const response = await groq.chat.completions.create({
			model: "llama-3.3-70b-versatile",
			max_tokens: 200,
			messages: [
				{
					role: "user",
					content: `Based on this chat, suggest 3 short reply options (max 8 words each). Return ONLY a JSON array of 3 strings, no other text.\n\n${transcript}`,
				},
			],
		});

		const suggestions = JSON.parse(response.choices[0].message.content);
		res.json({ suggestions });

	} catch (error) {
		console.log("Error in getSuggestions:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const summarizeChat = async (req, res) => {
	try {
		const { messages } = req.body;

		const transcript = messages
			.map((m) => `${m.fromMe ? "Me" : "Them"}: ${m.message}`)
			.join("\n");

		const response = await groq.chat.completions.create({
			model: "llama-3.3-70b-versatile",
			max_tokens: 400,
			messages: [
				{
					role: "user",
					content: `Summarize this conversation in 3 concise bullet points:\n\n${transcript}`,
				},
			],
		});

		res.json({ summary: response.choices[0].message.content });

	} catch (error) {
		console.log("Error in summarizeChat:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};