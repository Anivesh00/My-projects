import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stopwatch from "./components/Stopwatch";
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stop-watch" element={<Stopwatch />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);