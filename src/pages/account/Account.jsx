import React from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <main className="w-full">
      <h1 className="text-center pt-16 hidden lg:block">My Account</h1>
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-12 lg:col-span-9 ">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Account;
