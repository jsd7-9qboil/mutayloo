import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {
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
    <div className="flex flex-col items-center py-20 mx-auto w-full bg-white max-w-[480px] md:max-w-[1024px]">
      <div className="flex flex-col self-stretch w-full px-4">
        <div className="self-center px-8 pt-8 text-4xl font-medium leading-10 tracking-tight text-black bg-white whitespace-nowrap">
          Cart
        </div>
        <div className="flex justify-between gap-5 mt-6 text-base font-semibold">
          <div className="flex flex-col pb-7 border-b-2 border-purple-600 border-solid leading-[162.5%]">
            <div className="flex gap-4">
              <div className="justify-center items-center px-4 py-2 text-center text-gray-50 whitespace-nowrap bg-purple-600 h-[42px] rounded-[40px] w-[42px]">
                1
              </div>
              <div className="flex-1 my-auto text-zinc-800">Shopping cart</div>
            </div>
          </div>
          <div className="flex flex-col self-start pb-7">
            <div className="flex gap-4">
              <div className="justify-center items-center px-4 py-2 w-10 h-10 text-center text-gray-50 whitespace-nowrap bg-violet-200 leading-[150%] rounded-[40px]">
                2
              </div>
              <div className="flex-1 my-auto text-gray-400 leading-[162.5%]">
                Checkout details
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch w-full px-4 mt-2">
        <div className="pb-6 text-base font-semibold leading-7 border-b border-solid whitespace-nowrap border-zinc-500 text-neutral-900">
          Product
        </div>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex flex-col justify-center py-4 border-b border-gray-200 border-solid md:flex-row md:items-center md:justify-between">
            <div className="flex w-full gap-4 md:w-2/3">
              <div className="flex flex-col justify-center">
                <div className="w-24 h-24 bg-purple-600 shrink-0"></div>
              </div>
              <div className="flex flex-col flex-1 pb-1.5">
                <div className="text-sm font-semibold leading-5 text-neutral-900">
                  Tray Table
                </div>
                <div className="mt-2 text-xs leading-5 text-zinc-500">
                  Color: Black
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0 md:w-1/3 md:flex-row md:items-center md:justify-end">
              <div className="flex items-center gap-3 border-2 border-solid rounded-lg w-fit">
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
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold leading-5 text-neutral-900">
                  $19.19
                </div>
                <IoCloseSharp className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full mt-4 md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <div className="mt-4 text-xl font-medium leading-7 text-neutral-900">
            Have a coupon?
          </div>
          <div className="mt-2 text-base leading-7 text-zinc-500">
            Add your code for an instant cart discount
          </div>
          <div className="flex flex-col justify-center px-4 mt-4 w-full text-base font-medium tracking-tight leading-7 border border-solid border-zinc-500 max-w-[398px]">
            <div className="flex gap-2 py-3 border-b border-opacity-50 border-solid border-zinc-500">
              <div className="flex flex-1 gap-2 text-zinc-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44623b604c32c292c0ab3daf63a9df354942941109e5bc1f023a40e51488c80b?"
                  className="w-6 my-auto shrink-0 aspect-square"
                />
                <div className="flex-1">Coupon Code</div>
              </div>
              <div className="justify-center border-0 border-solid whitespace-nowrap border-neutral-900 text-neutral-900">
                Apply
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex gap-2.5 justify-between px-5 py-1.5 mt-8 w-full font-semibold text-center whitespace-nowrap max-w-[438px]">
            <div className="my-auto text-base leading-7 text-black">ราคารวม</div>
            <div className="text-lg leading-8 text-neutral-900">$114.00</div>
          </div>
          <div className="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full font-semibold text-center whitespace-nowrap max-w-[438px]">
            <div className="my-auto text-base leading-7 text-black">ค่าส่ง</div>
            <div className="text-lg leading-8 text-neutral-900">$1.00</div>
          </div>
          <div className="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full font-semibold text-center whitespace-nowrap max-w-[438px]">
            <div className="my-auto text-base leading-7 text-black">ส่วนลด</div>
            <div className="text-lg leading-8 text-neutral-900">$3.00</div>
          </div>
          <div className="shrink-0 mt-4 max-w-full bg-neutral-100 h-[3px] w-[398px]"></div>
          <div className="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full text-2xl font-semibold text-center whitespace-nowrap max-w-[438px]">
            <div className="my-auto text-black leading-[108%]">ราคาทั้งหมด</div>
            <div className="text-neutral-900">$100.00</div>
          </div>
          <button className="relative flex justify-center items-center px-16 py-6 mt-10 text-lg font-medium text-center text-white bg-purple-600 rounded-lg max-w-[398px] w-full">
          Check out
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
