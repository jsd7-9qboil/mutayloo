// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProductCard from "@/components/ProductCard";

// data
import productsData from "@/data/product";

const OurProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <h2 className="font-bold">Our Products</h2>
          <div className="swiper-pagination right-0"></div>
        </div>
        <div className="pb-8">
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <ProductCard />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
