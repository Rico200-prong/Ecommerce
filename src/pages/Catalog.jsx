import React from "react";
import Navbar from "./../components/catalog_components/Navbar";
import Collection from "./../components/catalog_components/Collection";
import Products from "./../components/catalog_components/Products";

import Newsletter from "./../components/catalog_components/Newsletter";

const Catalog = () => {
  return (
    <main>
      <Navbar />
      <Collection />
      <Products />
      <Newsletter />
    </main>
  );
};

export default Catalog;
