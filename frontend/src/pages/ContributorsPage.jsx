import { Link } from "react-router-dom";

const vinay = {
	name: "Vinay Pandey",
	initials: "VP",
	role: "Frontend Developer & Project Lead",
	color: "bg-blue-500",
	items: [
		{ area: "Frontend", task: "Login and signup pages UI", file: "pages/login/, pages/signup/" },
		{ area: "Frontend", task: "Sidebar showing all conversations", file: "components/sidebar/" },
		{ area: "Frontend", task: "Message display and input UI", file: "components/messages/" },
		{ area: "Frontend", task: "Fetching conversations list from server", file: "hooks/useGetConversations.js" },
		{ area: "Frontend", task: "Fetching messages when a chat is opened", file: "hooks/useGetMessages.js" },
		{ area: "Frontend", task: "Sending a message from the input box", file: "hooks/useSendMessage.js" },
		{ area: "Backend", task: "User signup with password hashing", file: "controllers/auth.controller.js" },
		{ area: "Backend", task: "User login and logout", file: "controllers/auth.controller.js" },
		{ area: "Backend", task: "JWT token generation and cookie setup", file: "utils/generateToken.js" },
		{ area: "Backend", task: "Route protection — blocks logged out users", file: "middleware/protectRoute.js" },
		{ area: "Backend", task: "Database models — User, Message, Conversation", file: "models/" },
		{ area: "Backend", task: "MongoDB connection setup", file: "db/connectToMongoDB.js" },
		{ area: "Backend", task: "Server setup and all API routes registered", file: "server.js" },
	],
};

const vicky = {
	name: "Vicky Sahani",
	initials: "VS",
	role: "Backend Engineer & Core Systems",
	color: "bg-emerald-500",
	items: [
		{ area: "Backend", task: "Real-time messaging so messages appear instantly without refresh", file: "socket/socket.js" },
		{ area: "Backend", task: "Tracking which users are currently online", file: "socket/socket.js" },
		{ area: "Backend", task: "AI assistant that reads the chat and replies automatically", file: "controllers/message.controller.js" },
		{ area: "Backend", task: "Get all messages between two users", file: "controllers/message.controller.js" },
		{ area: "Backend", task: "AI reply suggestions based on conversation", file: "controllers/ai.controller.js" },
		{ area: "Backend", task: "AI chat summary feature", file: "controllers/ai.controller.js" },
		{ area: "Frontend", task: "Global state — selected chat and messages shared across app", file: "zustand/useConversation.js" },
		{ area: "Frontend", task: "App-wide live connection management", file: "context/SocketContext.jsx" },
		{ area: "Frontend", task: "New messages appear on screen without refreshing", file: "hooks/useListenMessages.js" },
		{ area: "Frontend", task: "Notification sound when a new message arrives", file: "hooks/useListenMessages.js" },
	],
};

const Badge = ({ area }) =>
	area === "Frontend" ? (
		<span className='text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30'>
			Frontend
		</span>
	) : (
		<span className='text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30'>
			Backend
		</span>
	);

const Card = ({ person }) => (
	<div className='w-full p-6 rounded-xl shadow-xl bg-black/40 backdrop-blur-lg border border-white/20 flex flex-col gap-4'>

		{/* Header */}
		<div className='flex items-center gap-3'>
			<div className={`w-12 h-12 rounded-full ${person.color} flex items-center justify-center font-bold text-white text-sm shrink-0`}>
				{person.initials}
			</div>
			<div>
				<p className='font-bold text-white text-lg drop-shadow-lg'>{person.name}</p>
				<p className='text-xs text-gray-400'>{person.role}</p>
			</div>
		</div>

		<div className='divider my-0 py-0'></div>

		{/* Items */}
		<div className='flex flex-col gap-2'>
			{person.items.map((item, i) => (
				<div key={i} className='flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg px-3 py-2.5 border border-white/10'>
					<span className='text-green-400 text-xs mt-0.5 shrink-0 font-bold'>✓</span>
					<div className='flex-1 min-w-0'>
						<div className='flex items-center gap-2 mb-1'>
							<Badge area={item.area} />
						</div>
						<p className='text-sm text-white/80 leading-snug'>{item.task}</p>
						<p className='text-xs text-white/25 font-mono mt-1'>{item.file}</p>
					</div>
				</div>
			))}
		</div>
	</div>
);

const ContributorsPage = () => {
	return (
		<div className='min-h-screen w-full py-10 px-4'>

			{/* Header */}
			<div className='max-w-5xl mx-auto mb-8 text-center'>
				<h1 className='text-3xl font-semibold text-white drop-shadow-lg mb-1'>
					Project <span className='text-blue-400'>Contributors</span>
				</h1>
				<p className='text-sm text-gray-400'>Who built what in ChatiFy</p>
			</div>

			{/* Cards */}
			<div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-6'>
				<Card person={vinay} />
				<Card person={vicky} />
			</div>

			{/* Back link */}
			<div className='text-center mt-8'>
				<Link
					to='/login'
					className='text-sm text-gray-400 hover:text-blue-400 hover:underline transition-colors'
				>
					← Back to ChatiFy
				</Link>
			</div>

			{/* Footer */}
			<p className='text-center text-white/20 text-xs mt-6'>
				Built with ❤️ by Vinay Pandey & Vicky Sahani
			</p>
		</div>
	);
};

export default ContributorsPage;
