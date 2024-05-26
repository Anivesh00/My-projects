// App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Search from "./components/Search";
import Stopwatch from "./components/Stopwatch";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/stop-watch" element={<Stopwatch />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}

export default App;
