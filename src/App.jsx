import "./styles/App.css";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import QuizCards from "./pages/QuizCards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quizcards" element={<QuizCards />} />
      <Route path="/endpage" element={<EndPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
