import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./Components/common/SpinDaBlock/Spinner";
import "./App.css";

/* - - - COMPONENTS - - - */
const NavBar = React.lazy(() => import("./Components/NavBar/NavBar"));
const Home = React.lazy(() => import("./Components/Home/Home"));
const About = React.lazy(() => import("./Components/About/About"));
const Shows = React.lazy(() =>
  import("./Components/ShowComponents/Shows/Shows")
);
const SingleShow = React.lazy(() =>
  import("./Components/ShowComponents/SingleShow/SingleShow")
);
const EditShow = React.lazy(() =>
  import("./Components/EditComponents/EditShow")
);
const NewShow = React.lazy(() => import("./Components/NewForm/NewShow"));
const Characters = React.lazy(() =>
  import("./Components/CharacterComponents/Characters/Characters")
);
const SingleCharacter = React.lazy(() =>
  import("./Components/CharacterComponents/SingleCharacter/SingleCharacter")
);
const EditCharacter = React.lazy(() =>
  import("./Components/EditComponents/EditCharacter")
);
const NewCharacter = React.lazy(() =>
  import("./Components/NewForm/NewCharacter")
);
const Quotes = React.lazy(() => import("./Components/Quotes/Quotes"));
const NewQuote = React.lazy(() => import("./Components/NewForm/NewQuote"));

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<Spinner />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/shows/:id" element={<SingleShow />} />
            <Route path="/shows/:id/edit" element={<EditShow />} />
            <Route
              path="/shows/:id/characters/new"
              element={<NewCharacter />}
            />
            <Route path="/shows/new" element={<NewShow />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<SingleCharacter />} />
            <Route path="/characters/:id/edit" element={<EditCharacter />} />
            <Route path="/characters/:id/quotes/new" element={<NewQuote />} />
            <Route path="/characters/new" element={<NewCharacter />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/404" element={<h1>404 Not found!</h1>} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
