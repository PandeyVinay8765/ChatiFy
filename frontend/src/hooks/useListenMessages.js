import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;

			const sound = new Audio(notificationSound);
			sound.play().catch(() => {});   // prevent browser block

			setMessages((prev) => [...prev, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages]);
};

export default useListenMessages;
