import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			try {
				newMessage.shouldShake = true;

				// Play notification sound safely
				const audio = new Audio("/notification.mp3");
				audio.play().catch(() => {});

				setMessages((prev) => [...prev, newMessage]);
			} catch (err) {
				console.error("Message listener error:", err);
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [socket, setMessages]);
};

export default useListenMessages;
