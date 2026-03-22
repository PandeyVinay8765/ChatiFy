import { useState } from "react";

const data = {
  chatify: {
    name: "ChatiFy",
    emoji: "💬",
    vinay: [
      // Frontend
      { area: "Frontend", task: "Login and signup pages UI", file: "pages/login/, pages/signup/" },
      { area: "Frontend", task: "Sidebar showing all conversations", file: "components/sidebar/" },
      { area: "Frontend", task: "Message display and input UI", file: "components/messages/" },
      { area: "Frontend", task: "Fetching conversations list from server", file: "hooks/useGetConversations.js" },
      { area: "Frontend", task: "Fetching messages when a chat is opened", file: "hooks/useGetMessages.js" },
      { area: "Frontend", task: "Sending a message from the input box", file: "hooks/useSendMessage.js" },
      // Backend
      { area: "Backend", task: "User signup with password hashing", file: "controllers/auth.controller.js" },
      { area: "Backend", task: "User login and logout", file: "controllers/auth.controller.js" },
      { area: "Backend", task: "JWT token generation and cookie setup", file: "utils/generateToken.js" },
      { area: "Backend", task: "Route protection — blocks logged out users", file: "middleware/protectRoute.js" },
      { area: "Backend", task: "Database models — User, Message, Conversation", file: "models/" },
      { area: "Backend", task: "MongoDB connection setup", file: "db/connectToMongoDB.js" },
      { area: "Backend", task: "Server setup and all API routes registered", file: "server.js" },
    ],
    vicky: [
      // Backend
      { area: "Backend", task: "Real-time messaging so messages appear instantly without refresh", file: "socket/socket.js" },
      { area: "Backend", task: "Tracking which users are currently online", file: "socket/socket.js" },
      { area: "Backend", task: "AI assistant that reads the chat and replies automatically", file: "controllers/message.controller.js" },
      { area: "Backend", task: "Get all messages between two users", file: "controllers/message.controller.js" },
      { area: "Backend", task: "AI reply suggestions based on conversation", file: "controllers/ai.controller.js" },
      { area: "Backend", task: "AI chat summary feature", file: "controllers/ai.controller.js" },
      // Frontend
      { area: "Frontend", task: "Global state — selected chat and messages shared across app", file: "zustand/useConversation.js" },
      { area: "Frontend", task: "App-wide live connection management", file: "context/SocketContext.jsx" },
      { area: "Frontend", task: "New messages appear on screen without refreshing", file: "hooks/useListenMessages.js" },
      { area: "Frontend", task: "Notification sound when a new message arrives", file: "hooks/useListenMessages.js" },
    ],
  },
  talentiq: {
    name: "Talent-IQ",
    emoji: "🧠",
    vinay: [
      // Frontend
      { area: "Frontend", task: "Home landing page", file: "pages/HomePage.jsx" },
      { area: "Frontend", task: "Dashboard page — shows active and recent sessions", file: "pages/DashboardPage.jsx" },
      { area: "Frontend", task: "Problems list page with difficulty levels", file: "pages/ProblemsPage.jsx" },
      { area: "Frontend", task: "Resume builder page", file: "pages/ResumeBuilderPage.jsx" },
      { area: "Frontend", task: "Navbar component", file: "components/Navbar.jsx" },
      { area: "Frontend", task: "Protected routes — only logged in users can access pages", file: "App.jsx" },
      { area: "Frontend", task: "UI design and styling across the whole app", file: "frontend/src/" },
      // Backend
      { area: "Backend", task: "Database models — User and Session", file: "models/" },
      { area: "Backend", task: "MongoDB connection and environment variable setup", file: "lib/db.js, lib/env.js" },
      { area: "Backend", task: "Server setup and all API routes registered", file: "server.js" },
    ],
    vicky: [
      // Backend
      { area: "Backend", task: "Video calling inside interview sessions", file: "lib/stream.js" },
      { area: "Backend", task: "Live chat between both users during a session", file: "lib/stream.js" },
      { area: "Backend", task: "Creating a new interview session", file: "controllers/sessionController.js" },
      { area: "Backend", task: "Joining an existing session as participant", file: "controllers/sessionController.js" },
      { area: "Backend", task: "Ending a session and cleaning everything up", file: "controllers/sessionController.js" },
      { area: "Backend", task: "Auto-saving new users to database on signup", file: "lib/inngest.js" },
      { area: "Backend", task: "Running code in Python, JavaScript, Java and C++", file: "lib/piston.js" },
      { area: "Backend", task: "Real-time code sync so both users see same code", file: "server.js" },
      // Frontend
      { area: "Frontend", task: "Active sessions list on dashboard", file: "components/ActiveSessions.jsx" },
      { area: "Frontend", task: "Live code editor panel inside session", file: "components/CodeEditorPanel.jsx" },
      { area: "Frontend", task: "Problem description with examples and constraints", file: "components/ProblemDescription.jsx" },
    ],
  },
};

const areaBadge = (area) =>
  area === "Frontend"
    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
    : "bg-orange-500/10 text-orange-400 border border-orange-500/20";

export default function ContributorsPage() {
  const [project, setProject] = useState("chatify");
  const p = data[project];

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-1">Contributors</h1>
        <p className="text-base-content/40 text-sm">Who built what — frontend and backend</p>
      </div>

      {/* Project Toggle */}
      <div className="max-w-5xl mx-auto mb-8 flex gap-2 bg-base-100 rounded-xl p-1 border border-base-300">
        {Object.entries(data).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setProject(key)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              project === key
                ? "bg-primary text-primary-content"
                : "text-base-content/50 hover:text-base-content"
            }`}
          >
            {val.emoji} {val.name}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Vinay */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-5">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-11">
                  <span className="text-sm font-bold">VP</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-base">Vinay Pandey</p>
                <p className="text-xs text-base-content/40">Frontend + Backend</p>
              </div>
            </div>

            <div className="space-y-2">
              {p.vinay.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-base-200 rounded-lg px-3 py-2.5">
                  <span className="text-success text-xs mt-0.5 shrink-0">✓</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${areaBadge(item.area)}`}>
                        {item.area}
                      </span>
                    </div>
                    <p className="text-sm text-base-content/80 leading-snug">{item.task}</p>
                    <p className="text-xs text-base-content/25 font-mono mt-0.5">{item.file}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vicky */}
        <div className="card bg-base-100 border border-secondary/30 shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-5">
              <div className="avatar placeholder">
                <div className="bg-secondary text-secondary-content rounded-full w-11">
                  <span className="text-sm font-bold">VS</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-base">Vicky Sahani</p>
                <p className="text-xs text-base-content/40">Backend + Core Systems</p>
              </div>
            </div>

            <div className="space-y-2">
              {p.vicky.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-base-200 rounded-lg px-3 py-2.5 border border-secondary/10">
                  <span className="text-secondary text-xs mt-0.5 shrink-0">✓</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${areaBadge(item.area)}`}>
                        {item.area}
                      </span>
                    </div>
                    <p className="text-sm text-base-content/80 leading-snug">{item.task}</p>
                    <p className="text-xs text-base-content/25 font-mono mt-0.5">{item.file}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <p className="text-center text-base-content/25 text-xs mt-10">
        Built with ❤️ by Vinay Pandey & Vicky Sahani
      </p>
    </div>
  );
}