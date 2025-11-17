import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sessions, setSessions] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/sessions");
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      }
    };
    fetchSessions();
  }, []);

  const handleNewChat = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/new-chat");
      const data = await response.json();
      navigate(`/chat/${data.sessionId}`);
      // Refresh session list
      const updatedSessions = await (
        await fetch("http://localhost:3001/api/sessions")
      ).json();
      setSessions(updatedSessions);
    } catch (error) {
      console.error("Failed to create new chat:", error);
    }
  };

  return (
    <div
      className={`flex flex-col bg-gray-200 dark:bg-gray-800 p-4 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-4 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {isCollapsed ? ">>" : "<<"}
      </button>

      <button
        onClick={handleNewChat}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-6"
      >
        {isCollapsed ? "+" : "New Chat"}
      </button>

      <div className="flex-1 overflow-y-auto">
        <h2
          className={`text-lg font-semibold mb-2 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          History
        </h2>
        <ul>
          {sessions.map((session) => (
            <li key={session.id} className="mb-2">
              <Link
                to={`/chat/${session.id}`}
                className="block p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 truncate"
              >
                {!isCollapsed && session.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`pt-4 border-t border-gray-300 dark:border-gray-700 ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        <p className="font-semibold">User</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          user@example.com
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
