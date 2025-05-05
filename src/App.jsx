import "./styles/App.css";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import AnimalCard from "./components/AnimalCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/animalcards" element={<AnimalCard />} />
      <Route path="/end" element={<EndPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
