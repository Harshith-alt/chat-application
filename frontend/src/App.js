// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow"; // We'll create this next

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<NewChatView />} />
          <Route
            path="/chat/:sessionId"
            element={<ChatInterface theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </main>
    </div>
  );
};

const NewChatView = () => (
  <div className="flex-1 flex items-center justify-center text-center">
    <div>
      <h1 className="text-4xl font-bold">ChatGPT Clone</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Click "New Chat" in the sidebar to begin a conversation.
      </p>
    </div>
  </div>
);

const ChatInterface = ({ theme, toggleTheme }) => {
  const { sessionId } = useParams();
  return (
    <ChatWindow
      key={sessionId}
      sessionId={sessionId}
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
};

export default App;
