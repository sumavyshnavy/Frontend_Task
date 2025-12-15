import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import CustomQuiz from "./pages/CustomQuiz";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/quiz" element={<CustomQuiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
