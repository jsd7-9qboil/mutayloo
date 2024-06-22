import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";

const ProductAction = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <div className="flex flex-col self-stretch pb-20 mt-8 grow lg:mt-0">
        <div className="flex flex-col px-4 pb-4">
          <div className="flex flex-col pb-6 border-b border-gray-200 border-solid whitespace-nowrap">
            <div className="">
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex space-x-1">
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                    <AiFillStar className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>Reviews</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>Share</div>
                  <div>
                    <RiShareForwardLine className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 font-medium">
              <div className="text-4xl leading-9 tracking-tight text-neutral-900">
                {product?.discount
                  ? `$${product.discount}`
                  : `$${product?.price || "0.00"}`}
              </div>
              <div className="my-auto text-xl leading-7 text-zinc-500">
                {product?.discount ? `$${product?.price}` : null}
              </div>
            </div>
          </div>
          <div className="self-start mt-4 text-base font-semibold leading-7 text-zinc-500">
            Power
          </div>
          <div className="self-start mt-2 text-xl font-medium leading-8 text-black">
            Up Luck ++ 🍀
          </div>
          <div className="flex self-start justify-between gap-5 mt-6">
            <div className="flex gap-1 self-start mt-1.5 text-base font-semibold leading-7 text-zinc-500">
              <div>Choose Color</div>
              <MdOutlineNavigateNext className="w-6 h-6" />
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-8 h-8 bg-teal-400 rounded-full shrink-0"></div>
              <div className="w-8 h-8 bg-pink-600 rounded-full shrink-0"></div>
              <div className="w-8 h-8 rounded-full shrink-0 bg-amber-100"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-1 mt-6">
            <div className="text-base font-semibold leading-7 text-neutral-900">
              Select Size
            </div>
            <div className="text-sm font-medium leading-7 text-neutral-700">
              Size Guide
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pr-5 mt-4 text-base font-semibold leading-7 text-black lg:pr-20 whitespace-nowrap">
            {["50", "50", "50", "50", "50"].map((size, index) => (
              <button
                key={index}
                className="flex flex-col justify-center px-8 py-3.5 border border-solid border-neutral-700 rounded-md transition-transform transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-4 py-8 mt-2.5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
              Quantity
            </div>
            <div className="flex items-center self-stretch justify-center gap-3 px-4 py-3 rounded-lg bg-neutral-100">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                -
              </button>
              <div>{quantity}</div>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                +
              </button>
            </div>
            <div className="self-stretch my-auto text-base leading-7 text-center text-neutral-700">
              96 pieces available
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pr-5 mt-8 text-lg font-medium leading-8 tracking-tight text-center text-white lg:pr-20">
            <button
            
              className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Add to Cart
            </button>
            <button className="justify-center px-10 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAction;
