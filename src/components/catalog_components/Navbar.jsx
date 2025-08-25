import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[25px] lg:px-[50px] 2xl:px-[300px] py-[30px] text-white lg:bg-[#212121] ">
      <div className="flex items-center justify-between">
        <div className="text-[34px] lg:hidden text-[#212121]">
          <i class="bx bx-menu-alt-left"></i>
        </div>
        <form className="hidden lg:flex">
          <input
            type="search"
            placeholder="Search"
            className="w-[277px] bg-white py-[10px] px-[20px] rounded-[999px] text-black outline-none"
          />
        </form>
        <span className="flex items-center">
          <img src="/Component.png" alt="" className="hidden lg:flex" />
          <img
            src="/Group 141.png"
            alt=""
            className="flex lg:hidden w-[93px]"
          />
        </span>
        <div className="flex items-center gap-[15px]">
          <span className="lg:flex items-center gap-[8px] hidden">
            <p className="font-[200] text-[14px]">English</p>
            <i class="bx bx-chevron-down"></i>
          </span>
          <span className="lg:flex items-center gap-[8px] hidden ">
            <p className="font-[200] text-[14px]">USD</p>
            <i class="bx bx-chevron-down"></i>
          </span>
          <i class="bx  bx-heart text-[23px] hidden lg:flex"></i>
          <i class="bx  bx-user-circle text-[23px] hidden lg:flex"></i>
          <i class="bx bx-search text-[#828282] text-[34px] flex lg:hidden"></i>
          <p className="border border-solid border-black lg:border-white px-[2px] text-[#828282] ">
            U
          </p>
        </div>
      </div>
      <div className="lg:flex justify-center mt-[50px] hidden">
        <ul className="flex items-center gap-[50px] ">
          <Link to="/Home">Home</Link>
          <Link to="/Productpage">Products</Link>
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
