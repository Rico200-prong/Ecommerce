import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Productpage from "./pages/Productpage";
import Product_page2 from "./pages/Product_page2";
import Product_page3 from "./pages/Product_page3";
import Product_page4 from "./pages/Product_page4";
import Product_page5 from "./pages/Product_page5";
import Product_page6 from "./pages/Product_page6";
import Home from "./pages/Home";
import Checkout_2 from "./pages/Checkout_2";
import Shopping_Cart from "./pages/Shopping_Cart";

const App = () => {
  return (
    <div className="overflow-x-hidden font-mont scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product_page2" element={<Product_page2 />} />
          <Route path="/Product_page3" element={<Product_page3 />} />
          <Route path="/Product_page4" element={<Product_page4 />} />
          <Route path="/Product_page5" element={<Product_page5 />} />
          <Route path="/Product_page6" element={<Product_page6 />} />
          <Route path="/Checkout_2" element={<Checkout_2 />} />
          <Route path="/Shopping_Cart" element={<Shopping_Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
