import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-full">
      <div className="flex flex-col px-4 py-10 w-full text-base font-semibold leading-7 bg-gray-100 rounded-lg text-zinc-500 max-md:px-5 max-md:mt-6">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c60886cf1b97dcdf1e3d9d269fb5800da217d2948f61ecf6568f090c1d6a7e90?apiKey=37916082539041799f9e232af03575f2&"
            alt="User Avatar"
            className="self-center aspect-square w-[82px]"
          />
          <div className="self-center mt-1.5 text-xl leading-8 text-black">
            Narathip Thakham
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/account"}>Account</NavLink>
          </li>
          <li>
            <NavLink to={"/account/address"}>Addresses</NavLink>
          </li>
          <li>
            <NavLink to={"/account/orders"}>Orders</NavLink>
          </li>
          <li>
            <NavLink to={"/account/wishlist"}>Wishlist</NavLink>
          </li>
          <li>
            <NavLink>Logout</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
