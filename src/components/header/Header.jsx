import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Hamburger from "./features/Hamburger";
import MobileMenu from "./features/MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  console.log(isOpen);

  return (
    <>
      <header className="bg-white h-[60px] lg:h-[68px] shadow-lg sticky top-0 z-20">
        <div className="container h-full flex justify-between items-center">
          <div className="flex items-center gap-4 lg:flex-row-reverse">
            <Hamburger handleHamburger={handleHamburger} />
            <span className="font-medium text-xl lg:text-3xl lg:font-semibold">
              Mutayloo
            </span>
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
      <MobileMenu isOpen={isOpen} handleHamburger={handleHamburger} />
    </>
  );
};