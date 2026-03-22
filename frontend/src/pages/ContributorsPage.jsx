import { useState } from "react";

const vinay = {
  name: "Vinay Pandey",
  initials: "VP",
  role: "Frontend Developer & Project Lead",
  gradient: "from-violet-500 to-purple-600",
  glow: "rgba(139,92,246,0.15)",
  accent: "#a78bfa",
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
  gradient: "from-emerald-500 to-teal-500",
  glow: "rgba(16,185,129,0.15)",
  accent: "#34d399",
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

function Badge({ area }) {
  return area === "Frontend" ? (
    <span style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "4px", fontWeight: 600, background: "rgba(96,165,250,0.12)", color: "#93c5fd", border: "1px solid rgba(96,165,250,0.2)", letterSpacing: "0.03em" }}>
      Frontend
    </span>
  ) : (
    <span style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "4px", fontWeight: 600, background: "rgba(251,146,60,0.12)", color: "#fdba74", border: "1px solid rgba(251,146,60,0.2)", letterSpacing: "0.03em" }}>
      Backend
    </span>
  );
}

function Card({ person }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: "28px",
      backdropFilter: "blur(10px)",
      boxShadow: `0 0 60px ${person.glow}`,
    }}>
      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px",
          background: `linear-gradient(135deg, ${person.gradient.replace("from-", "").replace(" to-", ", ")})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: "15px", color: "white",
          flexShrink: 0,
          background: person.gradient.includes("violet")
            ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
            : "linear-gradient(135deg, #10b981, #0d9488)",
        }}>
          {person.initials}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "#f1f5f9", margin: 0 }}>{person.name}</p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0, marginTop: "2px" }}>{person.role}</p>
        </div>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {person.items.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              background: hovered === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
              border: `1px solid ${hovered === i ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
              borderRadius: "10px",
              padding: "10px 12px",
              transition: "all 0.15s ease",
              cursor: "default",
            }}
          >
            <span style={{ color: person.accent, fontSize: "12px", marginTop: "1px", flexShrink: 0, fontWeight: 700 }}>✓</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px", flexWrap: "wrap" }}>
                <Badge area={item.area} />
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: "1.4" }}>{item.task}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0, marginTop: "3px", fontFamily: "monospace" }}>{item.file}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ContributorsPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f1a 0%, #0a0f1e 50%, #0f0f1a 100%)",
      padding: "60px 16px",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      {/* Background dots */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            padding: "6px 18px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            💬 ChatiFy
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            Project Contributors
          </h1>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px", marginTop: "12px" }}>
            Who built what — frontend and backend
          </p>
        </div>

        {/* Two column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          <Card person={vinay} />
          <Card person={vicky} />
        </div>

        {/* Footer */}
        <p style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.15)",
          fontSize: "12px",
          marginTop: "48px",
        }}>
          Built with ❤️ by Vinay Pandey & Vicky Sahani
        </p>
      </div>
    </div>
  );
}
