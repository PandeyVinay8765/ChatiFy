import { useState } from "react";

const data = {
  chatify: {
    name: "ChatiFy",
    emoji: "💬",
    vinay: [
      { task: "User authentication — signup, login and logout", file: "auth.controller.js" },
      { task: "Database design — users, messages and conversations", file: "models/" },
      { task: "Frontend UI — sidebar, login page and signup page", file: "components/sidebar/" },
      { task: "Displaying conversations and messages on screen", file: "pages/home/" },
      { task: "Connecting frontend to backend using API calls", file: "hooks/" },
      { task: "Overall project structure and deployment", file: "server.js" },
    ],
    vicky: [
      { task: "Real-time messaging so messages appear instantly without refresh", file: "socket/socket.js" },
      { task: "Tracking which users are online at any moment", file: "socket/socket.js" },
      { task: "AI assistant that replies automatically inside the chat", file: "message.controller.js" },
      { task: "Global state management so all components share the same data", file: "zustand/useConversation.js" },
      { task: "Managing the live connection throughout the whole app", file: "context/SocketContext.jsx" },
      { task: "Playing notification sound when a new message arrives", file: "hooks/useListenMessages.js" },
    ],
  },
  talentiq: {
    name: "Talent-IQ",
    emoji: "🧠",
    vinay: [
      { task: "All frontend pages — home, dashboard, problems, resume builder", file: "src/pages/" },
      { task: "UI design and styling across the entire application", file: "frontend/src/" },
      { task: "Navigation and protected routes — only logged in users can access", file: "App.jsx" },
      { task: "Dashboard showing active and recent sessions", file: "DashboardPage.jsx" },
      { task: "Problems list page with difficulty levels", file: "ProblemsPage.jsx" },
      { task: "Resume builder page UI", file: "ResumeBuilderPage.jsx" },
    ],
    vicky: [
      { task: "Video calling inside interview sessions", file: "lib/stream.js" },
      { task: "Live chat between interviewer and candidate during session", file: "lib/stream.js" },
      { task: "Creating, joining and ending interview sessions", file: "controllers/sessionController.js" },
      { task: "Code editor that both users see and edit at the same time", file: "server.js" },
      { task: "Auto-saving new users to database when they sign up", file: "lib/inngest.js" },
      { task: "Running code in Python, JavaScript, Java and C++ inside the app", file: "lib/piston.js" },
    ],
  },
};

export default function ContributorsPage() {
  const [project, setProject] = useState("chatify");
  const p = data[project];

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-1">Contributors</h1>
        <p className="text-base-content/50 text-sm">Who built what in this project</p>
      </div>

      {/* Project Toggle */}
      <div className="max-w-4xl mx-auto mb-8 flex gap-2 bg-base-100 rounded-xl p-1 border border-base-300">
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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Vinay Card */}
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
                <p className="text-xs text-base-content/40">Frontend Developer & Project Lead</p>
              </div>
            </div>

            <div className="space-y-2">
              {p.vinay.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-base-200 rounded-lg px-3 py-2.5">
                  <span className="text-success text-xs mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="text-sm text-base-content/80 leading-snug">{item.task}</p>
                    <p className="text-xs text-base-content/25 font-mono mt-0.5">{item.file}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vicky Card */}
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
                <p className="text-xs text-base-content/40">Backend Developer & Systems</p>
              </div>
            </div>

            <div className="space-y-2">
              {p.vicky.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-base-200 rounded-lg px-3 py-2.5 border border-secondary/10">
                  <span className="text-secondary text-xs mt-0.5 shrink-0">✓</span>
                  <div>
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