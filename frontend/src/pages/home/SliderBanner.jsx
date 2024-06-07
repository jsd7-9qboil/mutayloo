import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export const SliderBanner = () => {
  return (
    <section>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/650" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
