import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center bg-base-100 max-w-[340px] rounded-tr-3xl rounded-bl-3xl">
      <div className="flex gap-2.5 justify-between p-4 w-full">
        <div className="flex flex-col text-base font-bold leading-4 text-center uppercase whitespace-nowrap">
          <div className="justify-center px-3.5 py-1 bg-white rounded-lg text-base-900">
            NEW
          </div>
          <div className="justify-center px-3.5 py-1 mt-2 text-white bg-accent rounded-lg">
            -50%
          </div>
        </div>
        <div className="flex justify-center items-center p-1.5 my-auto w-8 h-8 bg-white shadow-lg rounded-[32px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/459da70a06248a6f6c10b5c08fe944d45805a203198d21eacf35a491e9cbeafe?"
            className="w-5 aspect-square"
          />
        </div>
      </div>
      <figure className="relative">
        <img src="https://via.placeholder.com/340" alt="" />
        <button className="btn-primary px-8 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          Add to cart
        </button>
      </figure>
      <div className="flex flex-col items-center px-4 py-6 w-full">
        <p className="self-stretch text-xl font-bold leading-4 text-center uppercase text-stone-700">
          Product Name
        </p>
        <div className="flex gap-3 mt-2 text-sm leading-5 whitespace-nowrap">
          <p className="font-semibold text-neutral-900">$199.00</p>
          <p className="text-base-700 line-through">$299.00</p>
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <div className="shrink-0 w-4 h-4 bg-teal-400 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-pink-600 rounded-xl" />
          <div className="shrink-0 w-4 h-4 bg-amber-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
