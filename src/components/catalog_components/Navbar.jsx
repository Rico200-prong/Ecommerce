import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="px-[25px] lg:px-[50px] 2xl:px-[300px] py-[30px] text-white lg:bg-[#212121] relative">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="text-[34px] lg:hidden text-[#212121]">
            <i
              className={`bx bx-menu-alt-left cursor-pointer transition-opacity duration-200 ${
                isMobileMenuOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
              onClick={toggleMobileMenu}
            ></i>
            <i
              className={`bx bx-x cursor-pointer absolute top-[30px] left-[25px] transition-opacity duration-200 ${
                isMobileMenuOpen
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleMobileMenu}
            ></i>
          </div>

          {/* Desktop Search */}
          <form className="hidden lg:flex">
            <input
              type="search"
              placeholder="Search"
              className="w-[277px] bg-white py-[10px] px-[20px] rounded-[999px] text-black outline-none"
            />
          </form>

          {/* Logo */}
          <span className="flex items-center">
            <img src="/Component.png" alt="Logo" className="hidden lg:flex" />
            <img
              src="/Group 141.png"
              alt="Logo"
              className="flex lg:hidden w-[93px]"
            />
          </span>

          {/* Right Side Icons */}
          <div className="flex items-center gap-[15px]">
            {/* Desktop Language & Currency */}
            <span className="lg:flex items-center gap-[8px] hidden">
              <p className="font-[200] text-[14px]">English</p>
              <i className="bx bx-chevron-down"></i>
            </span>
            <span className="lg:flex items-center gap-[8px] hidden">
              <p className="font-[200] text-[14px]">USD</p>
              <i className="bx bx-chevron-down"></i>
            </span>

            {/* Desktop Icons */}
            <i className="bx bx-heart text-[23px] hidden lg:flex cursor-pointer"></i>
            <i className="bx bx-user-circle text-[23px] hidden lg:flex cursor-pointer"></i>

            {/* Mobile Search Toggle */}
            <i
              className="bx bx-search text-[#828282] text-[34px] flex lg:hidden cursor-pointer"
              onClick={toggleMobileSearch}
            ></i>

            {/* User Avatar */}
            <p className="border border-solid border-black lg:border-white px-[2px] text-[#828282] cursor-pointer">
              U
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex justify-center mt-[50px] hidden">
          <ul className="flex items-center gap-[50px]">
            <Link to="/Home" className="hover:opacity-80 transition-opacity">
              Home
            </Link>
            <Link
              to="/Productpage"
              className="hover:opacity-80 transition-opacity"
            >
              Products
            </Link>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Elements
            </Link>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Pages
            </Link>
            <Link to="/Catalog" className="hover:opacity-80 transition-opacity">
              Shop
            </Link>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Sale
            </Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div
        className={`lg:hidden px-[25px] pb-[20px] transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileSearchOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form className="w-full">
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-white py-[10px] px-[20px] rounded-[999px] text-black outline-none border border-gray-300"
          />
        </form>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-[25px]">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-[40px] pb-[20px] border-b border-gray-200">
            <img src="/Group 141.png" alt="Logo" className="w-[93px]" />
            <i
              className="bx bx-x text-[30px] text-[#212121] cursor-pointer"
              onClick={closeMobileMenu}
            ></i>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-[25px] mb-[40px]">
            <li>
              <Link
                to="/Home"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Productpage"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Elements
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="/Catalog"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block text-[#212121] text-[18px] font-medium py-[10px] hover:text-gray-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Sale
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Footer */}
          <div className="pt-[20px] border-t border-gray-200 space-y-[20px]">
            <div className="flex items-center gap-[15px]">
              <i className="bx bx-heart text-[20px] text-[#212121]"></i>
              <span className="text-[#212121] text-[16px]">Wishlist</span>
            </div>
            <div className="flex items-center gap-[15px]">
              <i className="bx bx-user-circle text-[20px] text-[#212121]"></i>
              <span className="text-[#212121] text-[16px]">Account</span>
            </div>
            <div className="flex items-center justify-between pt-[20px]">
              <div className="flex items-center gap-[8px]">
                <span className="text-[#212121] text-[14px]">English</span>
                <i className="bx bx-chevron-down text-[#212121]"></i>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-[#212121] text-[14px]">USD</span>
                <i className="bx bx-chevron-down text-[#212121]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
