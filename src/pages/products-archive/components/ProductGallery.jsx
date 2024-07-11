import React from "react";
// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductGallery = () => {
  return (
    <section className="w-full grid gap-4 grid-cols-1 xl:grid-cols-12">
      {/* hero */}
      <div className="xl:col-span-10 xl:order-2 aspect-square">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-[10%] rounded-bl-[10%] overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.placeholder.com/1080x1080" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.placeholder.com/1080x1080" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.placeholder.com/1080x1080" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.placeholder.com/1080x1080" alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* vertical gallery */}
      <div className="xl:col-span-2 xl:order-1 overflow-hidden">
        <Carousel orientation="horizontal" className="w-full h-full">
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <img
                src="https://via.placeholder.com/1080x1080"
                alt=""
                className="rounded-tr-2xl rounded-bl-2xl overflow-hidden"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductGallery;
