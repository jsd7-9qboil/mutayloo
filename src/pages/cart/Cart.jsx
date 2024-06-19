import React, { useState } from "react";



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
    <div>
        <div
  class="flex flex-col items-center py-20 mx-auto w-full bg-white max-w-[480px]"
>
  <div class="flex flex-col self-stretch px-4 w-full">
    <div
      class="self-center px-8 pt-8 text-4xl font-medium tracking-tight leading-10 text-black whitespace-nowrap bg-white"
    >
      Cart
    </div>
    <div class="flex gap-5 justify-between mt-6 text-base font-semibold">
      <div
        class="flex flex-col pb-7 border-b-2 border-purple-600 border-solid leading-[162.5%]"
      >
        <div class="flex gap-4">
          <div
            class="justify-center items-center px-4 py-2 text-center text-gray-50 whitespace-nowrap bg-purple-600 h-[42px] rounded-[40px] w-[42px]"
          >
            1
          </div>
          <div class="flex-1 my-auto text-zinc-800">Shopping cart</div>
        </div>
      </div>
      <div class="flex flex-col self-start pb-7">
        <div class="flex gap-4">
          <div
            class="justify-center items-center px-4 py-2 w-10 h-10 text-center text-gray-50 whitespace-nowrap bg-violet-200 leading-[150%] rounded-[40px]"
          >
            2
          </div>
          <div class="flex-1 my-auto text-gray-400 leading-[162.5%]">
            Checkout details
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col self-stretch px-4 mt-2 w-full">
    <div
      class="pb-6 text-base font-semibold leading-7 whitespace-nowrap border-b border-solid border-zinc-500 text-neutral-900"
    >
      Product
    </div>
    <div
      class="flex flex-col justify-center py-4 border-b border-gray-200 border-solid"
    >
      <div class="flex gap-4">
        <div class="flex flex-col justify-center">
          <div class="shrink-0 h-24 w-24 bg-purple-600"></div>
        </div>
        <div class="flex flex-col flex-1 pb-1.5">
          <div class="text-sm font-semibold leading-5 text-neutral-900">
            Tray Table
          </div>
          <div class="mt-2 text-xs leading-5 text-zinc-500">Color: Black</div>
         
            <div className="flex items-center gap-3 border-2 border-solid rounded-lg w-fit">
                      <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">-</button>
                      <div>{quantity}</div>
                      <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">+</button>
                    </div>
                    
          
        </div>
        
        
      </div>
    </div>

    <div
      class="flex flex-col justify-center py-4 border-b border-gray-200 border-solid"
    >
      <div class="flex gap-4">
        <div class="flex flex-col justify-center">
          <div class="shrink-0 h-24 w-24 bg-purple-600"></div>
        </div>
        <div class="flex flex-col flex-1 pb-1.5">
          <div class="text-sm font-semibold leading-5 text-neutral-900">
            Tray Table
          </div>
          <div class="mt-2 text-xs leading-5 text-zinc-500">Color: Black</div>
         
            <div className="flex items-center gap-3 border-2 border-solid rounded-lg w-fit">
                      <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">-</button>
                      <div>{quantity}</div>
                      <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">+</button>
                    </div>
                    
          
        </div>
        
        
      </div>
    </div>

    <div
      class="flex flex-col justify-center py-4 border-b border-gray-200 border-solid"
    >
      <div class="flex gap-4">
        <div class="flex flex-col justify-center">
          <div class="shrink-0 h-24 w-24 bg-purple-600"></div>
        </div>
        <div class="flex flex-col flex-1 pb-1.5">
          <div class="text-sm font-semibold leading-5 text-neutral-900">
            Tray Table
          </div>
          <div class="mt-2 text-xs leading-5 text-zinc-500">Color: Black</div>
         
            <div className="flex items-center gap-3 border-2 border-solid rounded-lg w-fit">
                      <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">-</button>
                      <div>{quantity}</div>
                      <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">+</button>
                    </div>
                    
          
        </div>
        
        
      </div>
    </div>
    
   

  </div>
  <div class="mt-4 text-xl font-medium leading-7 text-neutral-900">
    Have a coupon?
  </div>
  <div class="mt-2 text-base leading-7 text-zinc-500">
    Add your code for an instant cart discount
  </div>
  <div
    class="flex flex-col justify-center px-4 mt-4 w-full text-base font-medium tracking-tight leading-7 border border-solid border-zinc-500 max-w-[398px]"
  >
    <div
      class="flex gap-2 py-3 border-b border-solid border-zinc-500 border-opacity-50"
    >
      <div class="flex flex-1 gap-2 text-zinc-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44623b604c32c292c0ab3daf63a9df354942941109e5bc1f023a40e51488c80b?"
          class="shrink-0 my-auto w-6 aspect-square"
        />
        <div class="flex-1">Coupon Code</div>
      </div>
      <div
        class="justify-center whitespace-nowrap border-0 border-solid border-neutral-900 text-neutral-900"
      >
        Apply
      </div>
    </div>
  </div>
  <div
    class="flex gap-2.5 justify-between px-5 py-1.5 mt-8 w-full font-semibold text-center whitespace-nowrap max-w-[438px]"
  >
    <div class="my-auto text-base leading-7 text-black">ราคารวม</div>
    <div class="text-lg leading-8 text-neutral-900">$114.00</div>
  </div>
  <div
    class="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full font-semibold text-center whitespace-nowrap max-w-[438px]"
  >
    <div class="my-auto text-base leading-7 text-black">ค่าส่ง</div>
    <div class="text-lg leading-8 text-neutral-900">$1.00</div>
  </div>
  <div
    class="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full font-semibold text-center whitespace-nowrap max-w-[438px]"
  >
    <div class="my-auto text-base leading-7 text-black">ส่วนลด</div>
    <div class="text-lg leading-8 text-neutral-900">$3.00</div>
  </div>
  <div class="shrink-0 mt-4 max-w-full bg-neutral-100 h-[3px] w-[398px]"></div>
  <div
    class="flex gap-2.5 justify-between px-5 py-1.5 mt-4 w-full text-2xl font-semibold text-center whitespace-nowrap max-w-[438px]"
  >
    <div class="my-auto text-black leading-[108%]">ราคาทั้งหมด</div>
    <div class="text-neutral-900">$100.00</div>
  </div>
  <div
    class="flex overflow-hidden relative flex-col justify-center items-center px-16 py-6 mt-10 text-lg font-medium text-center text-white aspect-[6.42] fill-purple-600 max-w-[398px] w-[398px]"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/190152e3518333a158f1a2366e969ffe2909831ecccd70dd4fc3f70e8bcf8a73?"
      class="object-cover absolute inset-0 size-full"
    />
    Check out
  </div>
</div>

    </div>
  )
}

export default Cart
