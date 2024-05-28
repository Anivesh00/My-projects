// App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Search from "./components/search/Search";
import Stopwatch from "./components/stop-watch/Stopwatch";
import Chatbot from "./components/chat-bot/Chatbot";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stop-watch" element={<Stopwatch />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}

export default App;
