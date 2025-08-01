import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[300px] py-[30px] text-white bg-[#212121]">
      <div className="flex items-center justify-between">
        <form>
          <input
            type="search"
            placeholder="Search"
            className="w-[277px] bg-white py-[10px] px-[20px] rounded-[999px] text-black outline-none"
          />
        </form>
        <span className="flex items-center">
          <img src="/Component.png" alt="" />
        </span>
        <div className="flex items-center gap-[15px]">
          <span className="flex items-center gap-[8px]">
            <p className="font-[200] text-[14px]">English</p>
            <i class="bx bx-chevron-down"></i>
          </span>
          <span className="flex items-center gap-[8px]">
            <p className="font-[200] text-[14px]">USD</p>
            <i class="bx bx-chevron-down"></i>
          </span>
          <i class="bx  bx-heart text-[23px]"></i>
          <i class="bx  bx-user-circle text-[23px]"></i>
          <p className="border border-solid border-white px-[2px] ">U</p>
        </div>
      </div>
      <div className="flex justify-center my-[50px]">
        <ul className="flex items-center gap-[50px] ">
          <Link to="/Home">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Elements</Link>
          <Link to="/">Pages</Link>
          <Link to="/Catalog">Shop</Link>
          <Link to="/">Sale</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
