import React from "react";
import Navbar from "./../components/homepage_components/Navbar";
import Products from "./../components/homepage_components/Products";
import Newsletter from "./../components/homepage_components/Newsletter";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Products />
      <Newsletter />
    </main>
  );
};

export default Homepage;
