import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			// update messages safely
			setMessages((prev) => [...prev, newMessage]);

			// play sound safely
			try {
				const audio = new Audio("/notification.mp3");
				audio.volume = 1;
				audio.play().catch(() => {});
			} catch (err) {
				console.log("audio error", err);
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [socket, setMessages]);
};

export default useListenMessages;
