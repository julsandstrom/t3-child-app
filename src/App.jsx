import "./styles/App.css";
import EndPage from './components/EndPage';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/alternative" element={<AnimalCard/>}></Route>
        </Routes>
      </Router>
    <EndPage />

      <div>
      </div>
    </>
  );
}

export default App;
