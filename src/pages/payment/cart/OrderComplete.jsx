import React from 'react'

const OrderComplete = () => {
  return (
    <div >
      <div className="min-w-min">
        <div className="m-4">
          <div className="lg:max-w-4xl w-full  mx-auto ">
            <h1 className="text-center font-bold mt-12 mb-8">Complete !!</h1>
            <div className="grid grid-cols-3 gap-8">
              <div className="hidden lg:flex items-center gap-4 lg:block">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  1
                </div>
                <p className="lg:text-xl font-bold">Shopping Cart</p>
              </div>
              <div className="hidden lg:block flex lg:flex items-center gap-4 ">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                  inline-flex items-center justify-center  
                  bg-primary text-white text-xl font-bold"
                >
                  2
                </div>
                <p className="lg:text-xl font-bold ">Checkout Detail</p>
              </div>
              <div className="lg:block lg:flex flex items-center gap-4">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                  inline-flex items-center justify-center  
                  bg-primary text-white text-xl font-bold"
                >
                  3
                </div>
                <p className="lg:text-xl font-bold">Oder Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
       <div className="flex flex-col items-center py-2 bg-white">
        <div className="flex justify-center items-center self-stretch px-16 py-8 lg:py-20  w-full bg-white rounded-lg shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[546px]">
              <div className="flex flex-col px-7 font-medium text-center max-md:px-5 max-md:max-w-full">
                <div className="self-center text-3xl tracking-tight leading-8 text-zinc-500 max-md:max-w-full">
                ขอบคุณ 🎉
                </div>
                <div className="mt-4 text-3xl tracking-tight leading-10 text-zinc-800 max-md:max-w-full">
                เราได้รับรายการสั่งซื้อ
                <br />
                ของคุณเรียบร้อย
                </div>
            </div>
            <div className="justify-center px-20 mt-10 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <div className="flex  w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-5 text-base font-semibold leading-6 text-center text-gray-50 whitespace-nowrap max-md:mt-10">
                      <div className="z-10 justify-center items-start self-end px-3 py-2.5 w-10 bg-neutral-900 rounded-[80px]">
                        2
                      </div>
                    <div className="shrink-0 -mt-4 bg-purple-600 h-[116px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-5 text-base font-semibold leading-6 text-center text-gray-50 whitespace-nowrap max-md:mt-10">
                      <div className="z-10 justify-center items-start self-end px-3 py-2.5 w-10 bg-neutral-900 rounded-[80px]">
                        2
                      </div>
                      <div className="shrink-0 -mt-4 bg-purple-600 h-[116px]" />
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pb-5 text-base font-semibold leading-6 text-center text-gray-50 whitespace-nowrap max-md:mt-10">
                      <div className="z-10 justify-center items-start self-end px-3.5 py-2.5 w-10 bg-neutral-900 rounded-[80px]">
                        1
                      </div>
                      <div className="shrink-0 -mt-4 bg-purple-600 h-[116px]" />
                    </div>
                </div>
                </div>
            </div>
            <div className="justify-center mx-7 mt-10 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm font-semibold leading-5 text-zinc-500 max-md:mt-8">
                    <div>Order number:</div>
                    <div className="mt-5">Date:</div>
                    <div className="mt-5">Email:</div>
                    <div className="mt-5">Total:</div>
                    <div className="mt-5">Payment method:</div>
                   </div>
                  </div>
                </div>
            </div>
            <div className="justify-center self-center px-10 py-3 mt-10 text-base font-medium tracking-tight leading-7 text-center text-white bg-purple-600 max-md:px-5">
                <button>
                Purchase history
                </button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default OrderComplete;