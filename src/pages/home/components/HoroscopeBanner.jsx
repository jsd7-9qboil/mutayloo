import React from "react";
import bannerImg from "@/assets/images/HoroscopeBanner.png";

const HoroscopeBanner = () => {
  return (
    <section className="h-[540px] bg-cover bg-center bg-no-repeat bg-[url('https://via.placeholder.com/1920x650')]">
      <div className="container h-full grid grid-cols-12">
        <div className="col-span-4 flex items-center">
          <h2>Horoscope to choose Jewelry aside</h2>
        </div>
        <div className="col-span-4 flex justify-center items-center">
          <button className="btn-accent py-4 w-3/4">
            Enter
          </button>
        </div>
        <div className="col-span-4 flex items-center overflow-hidden">
          <img src={bannerImg} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default HoroscopeBanner;
