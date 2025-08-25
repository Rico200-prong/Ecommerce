import React from "react";
import Navbar from "./../components/catalog_components/Navbar";
import Hero from "./../components/productpage_components/Hero";
import Details from "./../components/productpage_components/Details";
import Products from "./../components/productpage_components/Products";

const Productpage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Details />
      <Products />
    </main>
  );
};

export default Productpage;
