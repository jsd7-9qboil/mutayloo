import React from 'react'

const Order = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex lg:justify-center pt-12 pb-20 mx-auto w-full bg-white ">
       <div className="flex flex-col lg:flex lg:items-start  pt-4 pb-10 w-full font-medium bg-white lg:hidden">
        <div className="flex gap-1 self-start pr-11  text-sm leading-6 whitespace-nowrap text-zinc-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/248cdae6db3f07246219743ced74a85f18d452ccca7b9bbcdfd47edc9f91c26b?"
            className="shrink-0 my-auto w-full aspect-square"
          />
          <a href=''>back</a>
        </div>
        <div className="text-center mt-10 text-4xl tracking-tight leading-10 text-black">
          My Account
        </div>
      </div>
      <div className="flex flex-col lg:flex lg:justify-center px-4 w-full bg-white">
        <div className="flex flex-col items-center px-4 py-10 w-full font-semibold bg-gray-100 rounded-lg lg:hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94b88ae85085030786d289c4e721261bd087a2ee3f6fd4220d3f532bc69d2c29?"
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
        <div className="flex flex-col lg:flex lg:justify-center px-8 pt-10 text-sm leading-5">
          <div className="text-xl font-semibold leading-8 text-black">
            Orders History
          </div>
          <div className="lg:flex lg:justify-start">
              <div className="flex gap-2.5 justify-between lg:justify-start py-4 mt-10 border-b border-gray-200 border-solid">
                <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-12 lg:justify-start text-zinc-500">
                  <div className="mt-4 lg:pr-20">Number ID</div>
                  <div className="mt-4 lg:pr-20">Dates</div>
                  <div className="mt-4 lg:pr-20">Status</div>
                  <div className="mt-4 lg:pr-20">Price</div>
                </div>
                {/* <div className="flex flex-col lg:flex lg:justify-center text-neutral-900">
                  <div>#3456_768</div>
                  <div className="mt-4">October 17, 2023</div>
                  <div className="mt-4">Delivered</div>
                  <div className="mt-4">$1234.00</div>
                </div> */}
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Order