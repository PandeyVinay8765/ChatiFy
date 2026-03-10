import { useEffect, useRef } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	// create audio only once
	const audioRef = useRef(null);

	useEffect(() => {
		audioRef.current = new Audio("/notification.mp3");
	}, []);

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			newMessage.shouldShake = true;

			// play sound safely
			if (audioRef.current) {
				audioRef.current.currentTime = 0;
				audioRef.current.play().catch(() => {});
			}

			setMessages((prev) => [...prev, newMessage]);
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [socket, setMessages]);
};

export default useListenMessages;
