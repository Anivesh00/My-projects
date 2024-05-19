import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Stopwatch from "./components/Stopwatch";
import Search from "./components/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stopwatch />}></Route>
      </Routes>
      <Routes>
        <Route path="/stop-watch" element={<Stopwatch />}></Route>
      </Routes>

      <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
