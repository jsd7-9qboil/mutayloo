import React from "react";
import productData from "@/data/product";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className="container">
      <h2>Related Products</h2>
      <div className="pb-8">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {productData.slice(0, 8).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
