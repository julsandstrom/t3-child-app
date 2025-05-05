import "./styles/App.css";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/alternative" element={<AnimalCard/>}></Route>
        </Routes>
      </Router>
      <div>
        <h1>Team 3</h1>
      </div>
    </>
  );
}

export default App;
