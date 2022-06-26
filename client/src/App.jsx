import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import Control from "./components/Control";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/control" element={<Control />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
