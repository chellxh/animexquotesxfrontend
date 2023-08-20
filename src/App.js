import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* - - - COMPONENTS - - - */
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Shows from "./Components/Shows/Shows";
import SingleShow from "./Components/SingleShow/SingleShow";
import Characters from "./Components/Characters/Characters";
import Quotes from "./Components/Quotes/Quotes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:id" element={<SingleShow />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
