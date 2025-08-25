import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[url('/background.png')] text-white px-[25px] lg:px-[50px] 2xl:px-[300px] py-[30px] font-poppins">
      <div className="flex items-center justify-between">
        <form className="hidden lg:flex">
          <input
            type="search"
            placeholder="Search"
            className="w-[277px] bg-white py-[10px] px-[20px] rounded-[999px] text-black outline-none"
          />
        </form>
        <span className="flex items-center">
          <img src="/Component.png" alt="" />
        </span>
        <div className="hidden lg:flex items-center gap-[15px]">
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
        <div className="text-[30px] lg:hidden ">
          <i class="bx bx-menu"></i>
        </div>
      </div>
      <div className="flex justify-center my-[50px]">
        <ul className="grid grid-cols-3 lg:grid-cols-6 items-center gap-y-[20px]  gap-x-[50px] ">
          <Link to="/Home">Home</Link>
          <Link to="/Productpage">Products</Link>
          <Link to="/">Elements</Link>
          <Link to="/">Pages</Link>
          <Link to="/Catalog">Shop</Link>
          <Link to="/">Sale</Link>
        </ul>
      </div>
      <div className=" lg:flex lg:items-center   ">
        <div className="lg:flex flex-col text-[16px] gap-[15px] text-[#BBBBBB] hidden ">
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-youtube"></i>
          <i class="bx bxl-google"></i>
        </div>
        <div className="lg:mx-[150px] w-[70%]    lg:w-[22%] ">
          <h1 className="text-[34px] font-[700] ">
            SimpleWood Chair Collection
          </h1>
          <p className="text-[14px] font-[300] mt-[10px] mb-[30px]">
            Find hand-curated collections that fit your style, space, and
            budget.
          </p>
          <button className="flex items-center font-[600] bg-[#7DB800] px-[20px] py-[10px] ">
            <span>SHOP NOW</span>
            <i class="bx bxs-right-arrow-alt text-[30px]"></i>
          </button>
          <div className="flex gap-[12px] mt-[150px]">
            <span className="w-[13px] h-[13px] rounded-full bg-[#7DB800]"></span>
            <span className="w-[13px] h-[13px] rounded-full bg-[#515151]"></span>
            <span className="w-[13px] h-[13px] rounded-full bg-[#515151]"></span>
            <span className="w-[13px] h-[13px] rounded-full bg-[#515151]"></span>
          </div>
        </div>
        <div className="flex items-center mt-[50px] lg:mt-[0px]">
          <div className="lg:w-[170px] flex flex-col gap-[20px] ">
            <img src="/deco.png" alt="" />
            <img src="/browntable.png" alt="" />
          </div>
          <div className="lg:w-[280px] ml-[20px]">
            <img src="/creamdeco.png" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
