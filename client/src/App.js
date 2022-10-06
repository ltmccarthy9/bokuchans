import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Sauce from "./pages/Sauce";
import Curry from "./pages/Curry";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
    <div>
      <Nav/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sauce-food" element ={<Sauce />} />
      <Route path="/curry" element ={<Curry />} />
      <Route path="/events-info" element ={<Events />} />
    </Routes>
    </Router>
  );
}

export default App;
