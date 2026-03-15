# ChatiFy 💬

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Reply%20Suggestions-blue)
![Status](https://img.shields.io/badge/Status-Live-success)


**ChatiFy** is a modern **real-time chat application** built using the **MERN stack**.
It allows users to send messages instantly and provides **AI-powered reply suggestions** to help users respond faster.

🌐 **Live Demo:**
https://chatify-o2yw.onrender.com/

---

## ✨ Features

* 🔐 Secure user authentication (JWT)
* 💬 Real-time messaging using **Socket.io**
* 🤖 **AI-powered smart reply suggestions**
* 👥 One-to-one chat conversations
* 📡 Online/offline user status
* ⚡ Fast and responsive UI
* 🔔 Real-time message updates
* 🗂 Conversation management

---

## 🤖 AI Reply Suggestions

ChatiFy includes an **AI-powered feature that suggests replies automatically based on the latest message in the conversation**.

### How it works

1. User receives a message.
2. The backend sends the message context to the AI API.
3. AI generates **smart reply suggestions**.
4. Suggested replies appear in the UI for quick response.

Example suggestions:

```text
Sure, I’ll check that.
Sounds good to me.
Let’s discuss this tomorrow.
```

This helps users respond faster without typing full messages.

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.io
* JWT Authentication
* AI API Integration

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
│   └── server.js
│
├── frontend
│   ├── src
│   ├── components
│   └── pages
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
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_key
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

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | /api/auth/signup | Register user                 |
| POST   | /api/auth/login  | Login user                    |
| GET    | /api/users       | Get users                     |
| POST   | /api/messages    | Send message                  |
| POST   | /api/ai/suggest  | Generate AI reply suggestions |

---

## 🚀 Future Improvements

* Group chat
* Voice messages
* File sharing
* Message reactions
* Video calling

---

## 👨‍💻 Author

**Vinay Pandey**
