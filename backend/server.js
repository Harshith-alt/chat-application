const express = require("express");
const cors = require("cors");
const { sessions } = require("./mockData");

const app = express();
const PORT = 3001; // Choose a port for your backend

app.use(cors()); // Allow cross-origin requests from your frontend
app.use(express.json()); // To parse JSON bodies

// --- API ENDPOINTS ---

// 1. Get all session titles/IDs for the sidebar
app.get("/api/sessions", (req, res) => {
  const sessionList = Object.keys(sessions).map((id) => ({
    id,
    title: sessions[id].title,
  }));
  res.json(sessionList);
});

// 2. Start a new chat session
app.get("/api/new-chat", (req, res) => {
  const newSessionId = `session-${Date.now()}`;
  sessions[newSessionId] = {
    title: "New Chat",
    history: [],
  };
  res.json({ sessionId: newSessionId });
});

// 3. Get the conversation history for a specific session
app.get("/api/session/:id", (req, res) => {
  const { id } = req.params;
  if (sessions[id]) {
    res.json(sessions[id]);
  } else {
    res.status(404).json({ error: "Session not found" });
  }
});

// 4. Post a question and get a mock response
app.post("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  if (!sessions[id]) {
    return res.status(404).json({ error: "Session not found" });
  }

  // Add user question to history
  sessions[id].history.push({ type: "user", text: question });

  // Generate a mock bot response
  const mockResponse = {
    type: "bot",
    text: `This is a mock response to your question: "${question}". Here is some sample structured data.`,
    table: {
      headers: ["Parameter", "Value", "Unit", "Source"],
      rows: [
        ["Data Point A", Math.round(Math.random() * 100), "units", "Mock API"],
        [
          "Data Point B",
          Math.round(Math.random() * 200),
          "metrics",
          "Static JSON",
        ],
        [
          "Data Point C",
          Math.round(Math.random() * 50),
          "points",
          "Generated Data",
        ],
      ],
    },
  };

  // Add bot response to history
  sessions[id].history.push(mockResponse);

  res.json(mockResponse);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
