# ChatiFy 💬

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Reply%20Suggestions-blue)
![Status](https://img.shields.io/badge/Status-Live-success)

**ChatiFy** is a modern **real-time chat application** built using the **MERN stack**.
It allows users to send messages instantly and provides an **AI assistant** that replies automatically inside the chat.

🌐 **Live Demo:**
https://chatify-o2yw.onrender.com/

---

## ✨ Features

* 🔐 Secure user authentication (JWT)
* 💬 Real-time messaging using **Socket.io**
* 🤖 **AI assistant** that replies automatically inside the chat
* 🧠 **AI-powered smart reply suggestions**
* 📋 **AI chat summary** — summarize any conversation in bullet points
* 👥 One-to-one chat conversations
* 📡 Online/offline user status
* ⚡ Fast and responsive UI
* 🔔 Notification sound on new messages
* 🗂 Conversation management

---

## 🤖 AI Features

ChatiFy includes **AI-powered features** built on the Groq API using the `llama-3.3-70b-versatile` model.

### AI Assistant
- Chat directly with an AI bot inside the app
- The AI reads the full conversation history and replies in context

### Smart Reply Suggestions
- Receive 3 short reply options based on the latest message
- Helps users respond faster without typing full messages

Example suggestions:
```text
Sure, I'll check that.
Sounds good to me.
Let's discuss this tomorrow.
```

### Chat Summary
- Summarize any conversation into 3 concise bullet points

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.io
* JWT Authentication
* Groq AI (llama-3.3-70b)

---

## 📁 Project Structure

```text
ChatiFy
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── socket
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   └── zustand
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ChatiFy.git
cd ChatiFy
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_key
```

Run the server

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| POST   | /api/auth/signup      | Register user                |
| POST   | /api/auth/login       | Login user                   |
| POST   | /api/auth/logout      | Logout user                  |
| GET    | /api/users            | Get all users                |
| GET    | /api/messages/:id     | Get messages with a user     |
| POST   | /api/messages/send/:id | Send a message              |
| POST   | /api/ai/suggest       | Get AI reply suggestions     |
| POST   | /api/ai/summarize     | Summarize a conversation     |

---

## 🚀 Future Improvements

* Group chat
* Voice messages
* File sharing
* Message reactions
* Video calling

---

## 👨‍💻 Project Contribution

### 🔹 Vinay Pandey

**Frontend**
- Login and signup pages UI
- Sidebar showing all conversations
- Message display and input UI
- Fetching conversations and messages from server
- Sending messages from the input box

**Backend**
- User signup with password hashing
- User login and logout
- JWT token generation and cookie setup
- Route protection — blocks logged out users
- Database models — User, Message, Conversation
- MongoDB connection setup
- Server setup and all API routes registered

---

### 🔹 Vicky Sahani

**Backend**
- Real-time messaging so messages appear instantly without refresh
- Tracking which users are currently online
- AI assistant that reads the chat and replies automatically
- Fetching all messages between two users
- AI reply suggestions based on conversation
- AI chat summary feature

**Frontend**
- Global state — selected chat and messages shared across the whole app
- App-wide live connection management
- New messages appear on screen without refreshing
- Notification sound when a new message arrives
