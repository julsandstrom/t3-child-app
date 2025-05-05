import "./styles/App.css";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/alternative" element={<AnimalCard/>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/end" element={<EndPage />} />
    </Routes>
  );
}
export default App;
