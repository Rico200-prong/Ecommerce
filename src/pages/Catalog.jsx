import React from "react";
import Navbar from "./../components/catalog_components/Navbar";
import Collection from "./../components/catalog_components/Collection";
import Products from "./../components/catalog_components/Products";

const Catalog = () => {
  return (
    <main>
      <Navbar />
      <Collection />
      <Products />
    </main>
  );
};

export default Catalog;
