import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Stopwatch from "./components/Stopwatch";
import Search from "./components/Search";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/stop-watch" element={<Stopwatch />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
