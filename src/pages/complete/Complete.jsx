import React from 'react'

const Complete = () => {
  return (
    <div className="flex flex-col pt-4 pb-20 mx-auto w-full bg-white max-w-[480px]">
    <div className="flex flex-col w-full px-4">
      <div className="items-center justify-center px-8 text-4xl font-medium leading-10 tracking-tight text-center text-black bg-white whitespace-nowrap">
        Complete!
      </div>
      <div className="flex flex-col mt-6 text-base font-semibold border-b-2 border-green-700 border-solid pb-7">
        <div className="flex gap-4">
          <div className="justify-center items-center px-4 py-2 text-center text-gray-50 whitespace-nowrap bg-green-700 h-[41px] leading-[150%] rounded-[40px] w-[41px]">
            3
          </div>
          <div className="flex-1 my-auto text-green-700 leading-[162.5%]">
            Order complete
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col self-center p-4 mt-10 w-full text-sm font-semibold leading-5 bg-white rounded border border-gray-200 border-solid shadow-2xl max-w-[398px]">
      <div className="text-3xl font-medium leading-8 tracking-tight text-zinc-500">
        ขอบคุณ 🎉
      </div>
      <div className="mt-4 text-4xl font-medium leading-10 tracking-tight text-zinc-800">
        เราได้รับรายการสั่งซื้อ
        <br />
        ของคุณเรียบร้อย
      </div>
      <div className="flex justify-between gap-2 mt-10 text-xs leading-3 text-center text-gray-50 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="z-10 justify-center items-center self-end px-1.5 w-4 h-4 bg-neutral-900 rounded-[80px]">
            2
          </div>
          <div className="h-24 -mt-2 bg-purple-600 shrink-0" />
        </div>
        <div className="flex flex-col">
          <div className="z-10 justify-center items-center self-end px-1.5 w-4 h-4 bg-neutral-900 rounded-[80px]">
            2
          </div>
          <div className="h-24 -mt-2 bg-purple-600 shrink-0" />
        </div>
        <div className="flex flex-col">
          <div className="z-10 justify-center items-center self-end px-1.5 w-4 h-4 bg-neutral-900 rounded-[80px]">
            2
          </div>
          <div className="h-24 -mt-2 bg-purple-600 shrink-0" />
        </div>
      </div>
      <div className="flex flex-col justify-center pb-4 mt-10 border-b border-gray-200 border-solid">
        <div className="text-zinc-500">Order code:</div>
        <div className="mt-2 text-neutral-900">#0123_45678</div>
      </div>
      <div className="flex flex-col justify-center pb-4 mt-4 border-b border-gray-200 border-solid">
        <div className="text-zinc-500">Date:</div>
        <div className="mt-2 text-neutral-900">October 19, 2023</div>
      </div>
      <div className="flex flex-col justify-center pb-4 mt-4 border-b border-gray-200 border-solid whitespace-nowrap">
        <div className="text-zinc-500">Email:</div>
        <div className="mt-2 text-neutral-900">qwer@gmail.com</div>
      </div>
      <div className="flex flex-col justify-center pb-4 mt-4 border-b border-gray-200 border-solid whitespace-nowrap">
        <div className="text-zinc-500">Total:</div>
        <div className="mt-2 text-neutral-900">$1,345.00</div>
      </div>
      <div className="flex flex-col justify-center pb-4 mt-4 border-b border-gray-200 border-solid">
        <div className="text-zinc-500">Payment method:</div>
        <div className="mt-2 text-neutral-900">Credit Card</div>
      </div>
      <div className="items-center justify-center px-10 py-3 mt-10 text-base font-medium leading-7 tracking-tight text-center text-white bg-purple-600">
        Purchase history
      </div>
    </div>
  </div>
  )
}

export default Complete
