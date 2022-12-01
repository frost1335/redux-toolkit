import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import Control from "./components/Control";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import Users from "./pages/Users";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Regsiter";

export const Layout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/control" element={<Control />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<Users />} />
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
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default App;
