import React from "react";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import ShopByPower from "./components/ShopByPower";
import OurProducts from "./components/OurProducts";
import HoroscopeBanner from "./components/HoroscopeBanner";
import Hastag from "./components/Hastag";

export const Home = () => {
  return (
    <main>
      <HeroBanner />
      <AboutUs />
      <ShopByPower />
      <OurProducts />
      <HoroscopeBanner />
      <Hastag />
    </main>
  );
};
