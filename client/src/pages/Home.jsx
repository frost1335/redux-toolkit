import React from "react";
import Advantage from "../components/Advantage";
import Design from "../components/Design";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Merchants from "../components/Merchants";
import Products from "../components/Products";
import Request from "../components/Request";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <Products />
      <Design />
      <Advantage />
      <Request />
      <Merchants />
    </>
  );
};

export default Home;
