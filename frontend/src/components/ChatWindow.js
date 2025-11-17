import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import TableResponse from "./TableResponse";
import AnswerFeedback from "./AnswerFeedback";
import ThemeToggle from "./ThemeToggle";

const ChatWindow = ({ sessionId, theme, toggleTheme }) => {
  const [history, setHistory] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/session/${sessionId}`
        );
        if (response.ok) {
          const data = await response.json();
          setHistory(data.history);
        } else {
          console.error("Session not found");
          setHistory([]);
        }
      } catch (error) {
        console.error("Failed to fetch history:", error);
      }
    };
    fetchHistory();
  }, [sessionId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSendMessage = async (message) => {
    // Add user message to history immediately for a responsive feel
    setHistory((prev) => [...prev, { type: "user", text: message }]);

    try {
      const response = await fetch(
        `http://localhost:3001/api/chat/${sessionId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: message }),
        }
      );
      const botResponse = await response.json();
      setHistory((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Chat Session: {sessionId.split("-")[1]}
        </h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {history.map((entry, index) => (
          <div
            key={index}
            className={`flex ${
              entry.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-4 rounded-lg max-w-2xl ${
                entry.type === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p>{entry.text}</p>
              {entry.table && <TableResponse data={entry.table} />}
              {entry.type === "bot" && <AnswerFeedback />}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
