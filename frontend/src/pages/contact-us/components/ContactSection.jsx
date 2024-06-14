import React from "react";

export const ContactSection = () => {
  return (
    <div className="container">
      <div className="lg:flex lg:justify-center lg:items-center  ">
        <div className="flex flex-col px-4 py-8 mx-auto lg:mx-auto w-full text-base max-w-[480px] lg:max-w-screen-2xl">
          <div className="text-4xl font-medium tracking-tight leading-10 text-neutral-900 lg:w-full">
            Contact Us
          </div>
          <div className="flex lg:grid lg:grid-cols-3 lg:gap-6 flex-col mt-8 lg:mt-8 lg:w-full  bg-white">
            <div className="flex flex-col items-center px-8 py-4 bg-base-100 p-4 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfca7eaa11631b67e8dd872780d8661a9644f10c34866254515ccb9640e0668?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Address
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-center text-black">
                123 mutayloo, Bangkok, Thailand
                <br />
              </div>
            </div>
            <div className="flex flex-col items-center px-8 py-4 mt-4 lg:mt-0 text-center bg-base-100 p-4 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f122a72f18b84a086be78199c790ff3987673ca7d10818484920acefa93ba0ed?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Contact Us
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-black">
                +66 98 765 4321
                <br />
              </div>
            </div>
            <div className="flex flex-col items-center px-8 py-4 mt-4 lg:mt-0 text-center whitespace-nowrap bg-base-100 p-4 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e105c5180fe744b0070643111db4dc1cd95e5ef8e0477a4da47196b1e8c10a63?"
                className="w-8 aspect-square"
              />
              <div className="mt-4 font-bold uppercase leading-[100%] text-zinc-500">
                Email
              </div>
              <div className="self-stretch mt-2 font-semibold leading-7 text-black">
                email@mutayloo.com
                <br />
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:w-full lg:m-auto lg:mt-4">
            <div className="lg:flex lg:flex-col lg:text-start">
              <div className="mt-8 text-xs font-bold leading-3 uppercase text-zinc-500">
                Full Name
              </div>
              <div className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500">
                Your Name
              </div>
              <div className="lg:mt-6 mt-4 text-xs font-bold leading-3 uppercase text-zinc-500">
                Email address
              </div>
              <div className="justify-center px-4 py-2 mt-3 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-500">
                Your Email
              </div>
              <div className="lg:mt-6 mt-4 text-xs font-bold leading-3 uppercase text-zinc-500">
                message
              </div>
              <div className="lg:py-24 lg:text-start justify-center p-4 mt-3 leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500">
                Your message
              </div>
              <div className="justify-center lg:justify-start lg:px-0 px-10 py-1.5 mt-4 font-medium tracking-tight leading-7 text-center bg-primary text-white p-4 rounded-lg">
                Send Message
              </div>
            </div>
            <div>
              <div className="lg:flex lg:flex-col lg:ml-5 lg::w-full">
                <div className="lg:flex lg:flex-col lg:grow lg:shrink lg:justify-center lg:w-full">
                  <div className="shrink-0 mt-8  bg-base-200 p-4 h-[500px] lg:w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
