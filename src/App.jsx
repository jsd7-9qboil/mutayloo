import React from "react";
import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
