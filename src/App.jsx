import "./styles/App.css";

import EndPage from './components/EndPage';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<EndPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

import EndPage from "./pages/EndPage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <>
      <StartPage />
      <div></div>
    </>

  );
}

export default App;
