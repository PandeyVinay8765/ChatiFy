import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;

			// play notification sound
			const sound = new Audio("/notification.mp3");
			sound.volume = 1;
			sound.play().catch(() => {});

			setMessages((prev) => [...prev, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages]);
};

export default useListenMessages;
