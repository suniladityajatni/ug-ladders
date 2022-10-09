import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './components/Homepage/Homepage';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
          {/* <Route path="/ladders" element={<Ladder/>} /> */}
        </Routes>
      </Router>
  );
}

export default App;
