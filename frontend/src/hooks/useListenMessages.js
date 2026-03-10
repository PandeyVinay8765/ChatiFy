import { useEffect, useRef } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	const audioRef = useRef(null);

	// load sound once
	useEffect(() => {
		audioRef.current = new Audio("/notification.mp3");
		audioRef.current.preload = "auto";
	}, []);

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			newMessage.shouldShake = true;

			setMessages((prev) => [...prev, newMessage]);

			// play sound safely
			try {
				if (audioRef.current) {
					audioRef.current.currentTime = 0;
					audioRef.current.play().catch(() => {});
				}
			} catch (err) {
				console.log("Audio error:", err);
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [socket, setMessages]);
};

export default useListenMessages;
