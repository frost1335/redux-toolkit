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
          <Route
            path="*"
            element={
              <div
                style={{
                  maxWidth: 1200,
                  padding: "100px 0",
                  margin: "auto",
                }}
              >
                <h1>404</h1>
                <h3>You are in the wrong page</h3>
              </div>
            }
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
