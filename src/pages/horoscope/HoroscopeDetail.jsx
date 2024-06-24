import React from "react";
import { HoroDetailHeader } from "./components/HoroDetailHeader";
import { HoroDetailPicture } from "./components/HoroDetailPicture";
import { Detail } from "./components/Detail";
import ProductCard from "../../components/ui/ProductCard";

export const HoroscopeDetail = () => {

  return (
    <div>
      <HoroDetailHeader />
      <HoroDetailPicture />
      <Detail />
      <ProductCard />
    </div>
  );
};
