import React from "react";

export const FeatureSection = () => {
  return (
      <div className="container">
        <div className="lg:m-auto lg:px-2 lg:py-8">
          <div className="lg:w-full lg:m-auto">
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:flex lg:flex-col">
                <div className="lg:flex lg:flex-col lg:grow lg:justify-center">
                  <div className="lg:shrink-0 lg:bg-base-200 p-4 text-black lg:h-[500px]" />
                </div>
              </div>
              <div className="flex flex-col justify-center self-stretch py-20 lg:py-5 mx-4 my-8 bg-base-100 p-4 text-black lg:ml-0 lg:w-full">
                <div className="flex flex-col lg:grow lg:justify-center lg:items-start lg:self-stretch lg:pl-24 lg:pr-36 lg:pt-10 px-4 mt-8 lg:w-full lg:text-base lg:font-medium lg: bg-base-100 p-4  lg:text-black lg:h-[340px]">
                  <div className="text-4xl font-medium tracking-tight leading-10 lg:mt-0 lg:w-full">
                    About Us
                  </div>
                  <div className="mt-4 text-base leading-7 lg:w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </div>
                </div>
                <div className="flex gap-1 self-start px-4 lg:ml-24 lg:mb-12 lg:mt-4 mt-6 text-base font-medium tracking-tight leading-7 border-b border-solid border-neutral-900">
                  <div>Shop Now</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c40df2e004e66be179de5a8e81d0e554472c5d9164bac4bc1803ece8dd3e9da7?"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};






