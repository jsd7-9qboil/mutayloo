import React from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-center py-8">My Account</h1>
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Account;
