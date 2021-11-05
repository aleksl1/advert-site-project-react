import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header.js";
import Navigation from "./Navigation.js";

import "../css/main.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
