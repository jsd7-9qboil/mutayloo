import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

export const ProductDetail = () => {
  return (
    <div>
      <section className="container py-4">
        <div className="self-stretch">
          <div className="flex gap-5 flex-col lg:flex-row lg:gap-0">
            <div className="flex flex-col w-full lg:w-[59%]">
              <div className="grow justify-between mt-8 lg:mt-0 lg:max-w-full">
                <div className="flex gap-5 flex-col lg:flex-row lg:gap-0">
                  <div className="flex flex-col w-full lg:w-[19%]">
                    <div className="flex flex-col grow justify-between self-stretch mt-5 lg:mt-0">
                      <div className="shrink-0 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300 h-[148px]"></div>
                      <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
                      <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
                      <div className="shrink-0 mt-6 w-40 h-40 rounded-tr-[25%] rounded-bl-[25%] bg-zinc-300"></div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-0 lg:ml-5 w-full lg:w-[81%]">
                    <div className="shrink-0 mx-auto max-w-full rounded-tr-[40%] rounded-bl-[40%] bg-zinc-300 h-[400px] sm:h-[500px] lg:h-[700px] w-full lg:w-[700px] mt-5 lg:mt-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-0 lg:ml-5 w-full lg:w-[41%]">
              <div className="flex flex-col grow self-stretch pb-20 mt-8 lg:mt-0">
                <div className="flex flex-col px-4 pb-4">
                  <div className="flex flex-col pb-6 whitespace-nowrap border-b border-gray-200 border-solid">
                    <div className="flex gap-0 justify-between text-xs leading-5 text-neutral-900 flex-wrap">
                      <div className="flex gap-2.5 self-start mt-1">
                        <div className="flex space-x-1">
                          <AiFillStar className="text-yellow-500 w-4 h-4" />
                          <AiFillStar className="text-yellow-500 w-4 h-4" />
                          <AiFillStar className="text-yellow-500 w-4 h-4" />
                          <AiFillStar className="text-yellow-500 w-4 h-4" />
                          <AiFillStar className="text-yellow-500 w-4 h-4" />
                        </div>
                        <div>Reviews</div>
                      </div>
                      <div className="flex flex-1 gap-2 pl-0 lg:pl-20 flex-wrap">
                        <div>Share</div>
                        <div>
                          <RiShareForwardLine className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 font-medium flex-wrap">
                      <div className="text-4xl tracking-tight leading-9 text-neutral-900">
                        $199.00
                      </div>
                      <div className="my-auto text-xl leading-7 text-zinc-500">
                        $400.00
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-4 text-base font-semibold leading-7 text-zinc-500">
                    Power
                  </div>
                  <div className="self-start mt-2 text-xl font-medium leading-8 text-black">
                    Up Luck ++ 🍀
                  </div>
                  <div className="flex gap-5 justify-between self-start mt-6">
                    <div className="flex gap-1 self-start mt-1.5 text-base font-semibold leading-7 text-zinc-500">
                      <div>Choose Color</div>
                      <img
                        loading="lazy"
                        src="https://placehold.co/160x148"
                        className="shrink-0 self-start w-6 aspect-square"
                      />
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="shrink-0 w-8 h-8 bg-teal-400 rounded-full"></div>
                      <div className="shrink-0 w-8 h-8 bg-pink-600 rounded-full"></div>
                      <div className="shrink-0 w-8 h-8 bg-amber-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-between mt-6 flex-wrap">
                    <div className="text-base font-semibold leading-7 text-neutral-900">
                      Select Size
                    </div>
                    <div className="text-sm font-medium leading-7 text-neutral-700">
                      Size Guide
                    </div>
                  </div>
                  <div className="flex gap-4 pr-5 lg:pr-20 mt-4 text-base font-semibold leading-7 text-black whitespace-nowrap flex-wrap">
                    <div className="flex flex-col justify-center">
                      <div className="justify-center px-8 py-3.5 border border-solid border-neutral-700">
                        50
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="justify-center px-8 py-3.5 border border-solid border-neutral-700">
                        50
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="justify-center px-8 py-3.5 border border-solid border-neutral-700">
                        50
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="justify-center px-8 py-3.5 border border-solid border-neutral-700">
                        50
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="justify-center px-8 py-3.5 border border-solid border-neutral-700">
                        50
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-4 py-8 mt-2.5">
                  <div className="flex gap-5 justify-between items-center flex-wrap">
                    <div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
                      Quantity
                    </div>
                    <div className="flex justify-center items-center self-stretch px-4 py-3 rounded-lg bg-neutral-100 gap-3">
                      <button>-</button>
                      <button>1</button>
                      <button>+</button>
                    </div>
                    <div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
                      96 pieces available
                    </div>
                  </div>
                  <div className="flex gap-4 pr-5 lg:pr-20 mt-8 text-lg font-medium tracking-tight leading-8 text-center text-white flex-wrap">
                    <div className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg">
                      Add to Cart
                    </div>
                    <div className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg">
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
