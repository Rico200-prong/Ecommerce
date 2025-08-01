import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121] px-[300px] py-[50px] text-white">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <Link to={"/"}>Policy</Link>
          <Link to={"/"}>Terms & Services</Link>
          <Link to={"/"}>Help</Link>
        </div>
        <div>
          <img src="/Component.png" alt="logo" />
        </div>
        <div className="flex items-center gap-[30px]">
          <p>Follow Us on Social</p>
          <div className="flex  text-[20px] gap-[15px] text-[#BBBBBB]">
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-youtube"></i>
            <i class="bx bxl-google"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[80px]">
        <small className="text-[#A2A2A2] text-[13px]">
          Copyring © Viachas Kul. All right reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
