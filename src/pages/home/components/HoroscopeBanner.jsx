import React from "react";
import bannerImg from "@/assets/images/HoroscopeBanner.png";

const HoroscopeBanner = () => {
  return (
    <section className="h-[540px] bg-cover bg-center bg-no-repeat bg-[url('https://via.placeholder.com/1920x650')]">
      <div className="container h-full grid grid-rows-12 lg:grid-cols-3">
        <div className="row-span-5 lg:row-span-12 flex items-center py-4 lg:py-0">
          <h2>Horoscope to choose Jewelry aside</h2>
        </div>
        <div className="row-span-2 lg:row-span-12 flex justify-center items-center">
          <button className="btn-accent py-4 w-3/4">
            Enter
          </button>
        </div>
        <div className="row-span-5 lg:row-span-12 flex items-center overflow-hidden">
          <img src={bannerImg} alt="" className="object-cover w-full h-full py-4 lg:py-0 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default HoroscopeBanner;
