import "./styles/App.css";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import QuizCards from "./pages/QuizCards";
import BakgrundsLjud from "./components/BakgrundsLjud";
import { useEffect, useState } from "react";

function App() {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return (
      <div className="rotate-wrapper">
        <p className="info-text">Vänligen rotera din enhet.</p>
      </div>
    );
  }

  return (
    <>
      <BakgrundsLjud />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quizcards" element={<QuizCards />} />
        <Route path="/endpage" element={<EndPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
