# 🗨️ ChatGPT-Style Conversational SPA

A responsive single-page conversational interface built using **React (JavaScript)** and **Tailwind CSS**, featuring a two-pane layout with session-based chat history, theme switching, and structured (tabular) response rendering.  
The backend is powered by **Node.js/Express**, serving mock static JSON to simulate conversation sessions, responses, and history.

---

## 🚀 Features

- 💬 Chat-style UI with dynamic message rendering  
- 🌓 Light & Dark theme toggle  
- 🗂️ Persistent sessions linked by unique URL IDs  
- 📑 View and access past chats in sidebar  
- 📊 Ability to render structured/tabular response data  
- 🔌 Mock REST API simulating session and history data  
- ⚡ SPA powered by React + Tailwind CSS  

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React (JavaScript), Tailwind CSS |
| Backend | Node.js, Express |
| Data | Mock static JSON |

---


---

## 📥 Installation & Setup

### 1️. Clone Repo
```bash
git clone <repo-url>
cd project-root
```

### 2. API Endpoints

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/sessions`            | Fetch list of chat sessions      |
| GET    | `/session/:id`         | Fetch conversation by session ID |
| POST   | `/session/:id/message` | Append message & return response |

### 3. Install dependencies
 Frontend
 ```bash
 cd frontend
npm install
npm run dev
```
 Backend
 ```bash
cd ../backend
npm install
npm start
```


