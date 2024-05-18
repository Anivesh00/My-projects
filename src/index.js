import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // Import the Tailwind CSS file
import Stopwatch from "./components/Stopwatch";
import Stopwatch2 from "./components/Stopwatch2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stopwatch />}></Route>
      </Routes>
      <Routes>
        <Route path="/stop-watch" element={<Stopwatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
