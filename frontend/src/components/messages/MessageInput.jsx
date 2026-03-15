import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [suggestLoading, setSuggestLoading] = useState(false);
	const { loading, sendMessage } = useSendMessage();
	const { messages } = useConversation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		setSuggestions([]);
		await sendMessage(message);
		setMessage("");
	};

	const handleSuggestionClick = (text) => {
		setMessage(text);
		setSuggestions([]);
	};

	const handleGetSuggestions = async () => {
		if (messages.length === 0) return;
		setSuggestLoading(true);
		try {
			const recent = messages.slice(-6).map((m) => ({
				message: m.message,
				fromMe: m.fromMe,
			}));
			const res = await fetch("/api/ai/suggest", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: recent }),
			});
			const data = await res.json();
			if (data.suggestions) setSuggestions(data.suggestions);
		} catch (err) {
			console.error("Suggestion error:", err);
		} finally {
			setSuggestLoading(false);
		}
	};

	return (
		<div className='px-4 my-3'>
			{suggestions.length > 0 && (
				<div className='flex flex-wrap gap-2 mb-2'>
					{suggestions.map((s, i) => (
						<button
							key={i}
							onClick={() => handleSuggestionClick(s)}
							className='text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full transition-colors'
						>
							{s}
						</button>
					))}
				</div>
			)}

			<form onSubmit={handleSubmit}>
				<div className='w-full relative flex items-center gap-2'>
					<button
						type='button'
						onClick={handleGetSuggestions}
						disabled={suggestLoading}
						className='text-purple-400 hover:text-purple-300 transition-colors'
						title='Get AI suggestions'
					>
						{suggestLoading
							? <div className='loading loading-spinner loading-xs' />
							: <BsStars size={18} />
						}
					</button>

					<input
						type='text'
						className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
						placeholder='Send a message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>

					<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
						{loading ? <div className='loading loading-spinner' /> : <BsSend />}
					</button>
				</div>
			</form>
		</div>
	);
};

export default MessageInput;