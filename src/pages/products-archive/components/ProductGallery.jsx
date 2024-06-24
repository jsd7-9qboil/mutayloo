import React from "react";

const ProductGallery = () => {
  return (
    <>
      <div className="justify-between mt-8 grow lg:mt-0 lg:max-w-full">
        <div className="flex flex-col-reverse gap-5 lg:flex-row lg:gap-0">
          <div className="flex flex-col w-full lg:w-[19%]">
            <div className="flex justify-around gap-4 mt-5 lg:flex-col md:justify-between grow lg:mt-0">
              <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
              <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
              <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
              <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
            </div>
          </div>
          <div className="flex flex-col ml-0 lg:ml lg:justify-center items-center w-full lg:w-[81%]">
            <img
              src=""
              className="shrink-0 mx-auto max-w-full rounded-tr-[40%] rounded-bl-[40%] bg-zinc-300 h-[400px] sm:h-[500px] lg:h-[700px] w-full lg:w-[700px] mt-5 lg:mt-0 p-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
