import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="bg-white h-[60px] lg:h-[68px] shadow-lg sticky top-0 z-10">
      <div className="container h-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <AiOutlineMenu className="w-6 h-6 lg:w-8 lg:h-8" /> 
          <span className="font-medium text-xl lg:text-3xl lg:font-semibold">Mutayloo</span>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-8 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products-list">Products</Link>
            </li>
            <li>
              <Link to="/horoscope">Horoscope</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <AiOutlineSearch className="w-6 h-6" />
          <AiOutlineUser className="w-6 h-6 hidden lg:block" />
          <AiOutlineHeart className="w-6 h-6 hidden lg:block" />
          <AiOutlineShoppingCart className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};
