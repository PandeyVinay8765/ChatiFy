import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { BsFileText } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation, messages } = useConversation();
	const [summary, setSummary] = useState("");
	const [summaryLoading, setSummaryLoading] = useState(false);
	const [showSummary, setShowSummary] = useState(false);

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	useEffect(() => {
		setShowSummary(false);
		setSummary("");
	}, [selectedConversation?._id]);

	const handleSummarize = async () => {
		if (messages.length === 0) return;
		setSummaryLoading(true);
		try {
			const recent = messages.map((m) => ({
				message: m.message,
				fromMe: m.fromMe,
			}));
			const res = await fetch("/api/ai/summarize", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: recent }),
			});
			const data = await res.json();
			setSummary(data.summary || "");
			setShowSummary(true);
		} catch (err) {
			console.error("Summary error:", err);
		} finally {
			setSummaryLoading(false);
		}
	};

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-4 py-2 mb-2 flex items-center justify-between'>
						<div>
							<span className='label-text'>To: </span>
							<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
						</div>
						<button
							onClick={handleSummarize}
							disabled={summaryLoading || messages.length === 0}
							className='flex items-center gap-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded transition-colors disabled:opacity-50'
						>
							{summaryLoading
								? <div className='loading loading-spinner loading-xs' />
								: <BsFileText size={14} />
							}
							<span>Summarize</span>
						</button>
					</div>

					{showSummary && summary && (
						<div className='mx-4 mb-2 p-3 bg-indigo-900/40 border border-indigo-600 rounded-lg text-sm text-white'>
							<div className='flex justify-between items-center mb-1'>
								<span className='font-semibold text-indigo-300'>AI Summary</span>
								<button
									onClick={() => setShowSummary(false)}
									className='text-gray-400 hover:text-white text-xs'
								>
									close
								</button>
							</div>
							<p className='whitespace-pre-line'>{summary}</p>
						</div>
					)}

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};