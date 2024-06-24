import React from "react";
import { HoroDetailHeader } from "./components/HoroDetailHeader";
import { HoroDetailPicture } from "./components/HoroDetailPicture";
import { Detail } from "./components/Detail";

const HoroscopeDetail = () => {
  return (
    <div>
      <HoroDetailHeader />
      <HoroDetailPicture />
      <Detail />
    </div>
  );
};

export default HoroscopeDetail;
