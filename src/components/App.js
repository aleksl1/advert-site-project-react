import Header from "./Header.js";
import Navigation from "./Navigation.js";

import HomePage from "../pages/HomePage.js";
import AddPage from "../pages/AddPage.js";
import SearchPage from "../pages/SearchPage.js";
import UserPanelPage from "../pages/UserPanelPage.js";

import { Route, Routes } from "react-router-dom";

import "../css/main.css";

function App() {
  const adverts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage adverts={adverts} />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<UserPanelPage />} />
      </Routes>
    </div>
  );
}

export default App;
