import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

// create sound once
const notificationSound = new Audio("/notification.mp3");

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			newMessage.shouldShake = true;

			// update messages
			setMessages((prev) => [...prev, newMessage]);

			// play notification sound safely
			try {
				notificationSound.currentTime = 0;
				notificationSound.play().catch(() => {});
			} catch (error) {
				console.log("Sound error:", error);
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [socket, setMessages]);
};

export default useListenMessages;
