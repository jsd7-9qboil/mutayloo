import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const BannerItem = ({ banner }) => {
  return (
    <div
      className="h-[650px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.imageUrl})` }}
    >
      <div className="h-full container grid lg:grid-cols-2">
        <div className="h-full py-16 flex flex-col justify-end lg:justify-center items-center lg:items-start gap-4">
          <h1
            className="text-3xl lg:text-5xl leading-tight font-bold italic"
            dangerouslySetInnerHTML={{ __html: banner.title }}
          ></h1>
          <p
            className="text-2xl font-medium hidden lg:block"
            dangerouslySetInnerHTML={{ __html: banner.subtitle }}
          />
          <div className="flex gap-4">
            <button className="btn-primary">Click Me</button>
            <button className="btn-primary flex gap-2 items-center">Click Me <AiOutlineArrowRight/></button>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

const HeroBanner = () => {
  const bannerData = [
    {
      id: 1,
      title: "&quot;เลือกเครื่องประดับ <br /> ตามดวงราษีได้ที่นี่&quot;",
      subtitle: "เครื่องประดับสายมู <br /> ที่สาวๆทุกคนต้องเป็นเจ้าของ",
      imageUrl: "https://via.placeholder.com/1920x650",
    },
    {
      id: 2,
      title: "lorem ipsum",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://via.placeholder.com/1920x650",
    },
    {
      id: 3,
      title: "lorem ipsum",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://via.placeholder.com/1920x650",
    },
    {
      id: 4,
      title: "lorem ipsum",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://via.placeholder.com/1920x650",
    },
    {
      id: 5,
      title: "lorem ipsum",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://via.placeholder.com/1920x650",
    },
  ];

  return (
    <section className="bg-accent max-h-[650px] overflow-hidden">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
