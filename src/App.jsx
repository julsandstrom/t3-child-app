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
)
}
export default App;
