import React from "react";

const Address = () => {
  return (
      <div className="container">
        <div className="flex flex-col lg:flex lg:justify-start justify-end pt-12 mx-auto w-full bg-white">
          <div className="flex flex-col lg:flex lg:justify-center items-start pt-4 pb-10 w-full font-medium bg-white lg:hidden">
            <div className="flex gap-1 self-start pr-11  text-sm leading-6 whitespace-nowrap text-zinc-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/248cdae6db3f07246219743ced74a85f18d452ccca7b9bbcdfd47edc9f91c26b?"
                className="shrink-0 my-auto w-full aspect-square"
              />
              <div>back</div>
            </div>
            <div className="self-center mt-10 text-4xl tracking-tight leading-10 text-black">
              My Account
            </div>
          </div>
          <div className="flex flex-col w-full bg-white">
            <div className="flex flex-col items-center self-center px-4 py-10 w-full font-semibold bg-gray-100 rounded-lg lg:hidden">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02498d4bd3dce7d4aa0bfdee0ea6100e10b07dc0c451ae2911fc443830dd8fc5?"
                className="aspect-square w-[82px]"
              />
              <div className="mt-1.5 text-xl leading-8 text-black">
                Narathip Thakham
              </div>
              <div className="flex gap-5 justify-between self-stretch py-2 pr-2 pl-3.5 mt-10 text-base leading-7 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-500 text-neutral-900">
                <div className="my-auto">Account</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6556996aa3f4a3c86d89e3d0686f793f44d2d30536607a1a2d2e23b205bc8977?"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:justify-start lg:items-start px-4 pt-10 pb-12 w-full text-sm leading-5 lg:ml-8">
              <div className="text-xl font-semibold leading-8 text-black ">
                Address
              </div>
              <div className="lg:flex lg:justify-center lg:items-center lg:gap-8">
                  <div className="flex flex-col lg:flex lg:justify-center p-4 mt-5 rounded-lg border border-solid border-zinc-500 lg:w-full">
                    <div className="flex gap-5 justify-between w-full text-base font-semibold leading-7">
                      <div className="text-black">Billing Address</div>
                      <div className="flex gap-1 whitespace-nowrap text-zinc-500">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c10d914ac451feadad5cc644556dd66682086e3929477e8a95579ba3b1e1c9f?"
                          className="shrink-0 my-auto w-4 aspect-square"
                        />
                        <a href="">Edit</a>
                      </div>
                    </div>
                    <div className="mt-2 text-black">Sofia Havertz</div>
                    <div className="mt-1 text-black">(+1) 234 567 890</div>
                    <div className="mt-1 text-black">
                      345 Long Island, NewYork, United States
                    </div>
                  </div>
                  <div className="flex flex-col p-4 mt-6 rounded-lg border border-solid border-zinc-500 lg:w-full">
                    <div className="flex gap-5 justify-between w-full text-base font-semibold leading-7">
                      <div className="text-black">Shipping Address</div>
                      <div className="flex gap-1 whitespace-nowrap text-zinc-500">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c10d914ac451feadad5cc644556dd66682086e3929477e8a95579ba3b1e1c9f?"
                          className="shrink-0 my-auto w-4 aspect-square"
                        />
                        <a href="">Edit</a>
                      </div>
                    </div>
                    <div className="mt-2 text-black">Sofia Havertz</div>
                    <div className="mt-1 text-black">(+1) 234 567 890</div>
                    <div className="mt-1 text-black">
                      345 Long Island, NewYork, United States
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
  )
};

export default Address;
