import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
