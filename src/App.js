// App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Search from "./components/Search";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/stop-watch" element={<Stopwatch />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
