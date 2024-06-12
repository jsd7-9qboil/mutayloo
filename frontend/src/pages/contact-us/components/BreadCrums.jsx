import React from 'react'

export const BreadCrums = () => {
  return (
      <div className="container">
        <div className=" flex flex-col justify-center lg:justify-start  lg:px-16  lg:py-16 bg-secondary text-black p-4 lg:w-full">
            <div className="text-sm lg:text-base leading-6 text-black lg:w-full">
            Home &gt; Contact Us
            </div>
            <div className="mt-4 text-3xl lg:text-4xl font-bold leading-6 text-black lg:w-full">
            Contact Us
            </div>
        </div>
      </div>
  );
};
