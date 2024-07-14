import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";

const Checkout = () => {
  return (
    <div>
      <div className="min-w-min">
        <div>
          <div className="lg:max-w-4xl w-full  mx-auto ">
            <h1 className="text-center font-bold my-8">Checkout</h1>
            <div className="grid grid-cols-3 gap-8">
              <div className="hidden lg:flex flex items-center gap-4 lg:block">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  1
                </div>
                <p className="lg:text-xl font-bold">Shopping Cart</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold text-center"
                >
                  2
                </div>
                <p className="lg:text-xl font-bold text-center">
                  Checkout Detail
                </p>
              </div>
              <div className="hidden lg:block lg:flex flex items-center gap-4">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
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
      <div className="lg:flex gap-10 ml-4 mt-12">
        <div className="lg:w-3/5 w-full">
          <div className="flex flex-col px-6 py-10 rounded border border-solid border-zinc-500 max-w-[964px] max-md:px-5">
            <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
              Contact Infomation
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ที่อยู่การจัดส่ง(ถ้ามี)
            </div>
            <div>
              <div className="flex gap-2 max-md:flex-wrap">
                <Select>
                  {" "}
                  <SelectTrigger className="w-[180px] justify-between px-4 py-4 mt-3 text-base leading-7 bg-white rounded-md  text-zinc-500 max-md:max-w-full w-full">
                    {" "}
                    <SelectValue placeholder="Select address" />{" "}
                  </SelectTrigger>{" "}
                  <SelectContent>
                    {" "}
                    <SelectGroup>
                      {" "}
                      <SelectLabel>address</SelectLabel>{" "}
                      <SelectItem value="address1">address1</SelectItem>{" "}
                      <SelectItem value="address2">address2</SelectItem>{" "}
                      <SelectItem value="address3">address3</SelectItem>{" "}
                    </SelectGroup>{" "}
                  </SelectContent>{" "}
                </Select>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap w-full  ">
              <div className="flex flex-col max-md:max-w-full w-full ">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  ชื่อจริง *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500  w-full"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col max-md:max-w-full w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  นามสกุล *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full w-full">
              <div className="flex flex-col max-md:max-w-full w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  โทรศัพท์ *
                </div>
                <input
                  type="text"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="โทรศัพท์"
                />
              </div>
              <div className="flex flex-col max-md:max-w-full w-full">
                <div className="text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                  อีเมล *{" "}
                </div>
                <input
                  type="email"
                  className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
                  placeholder="อีเมล์"
                />
              </div>
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ที่อยู่ *
            </div>
            <input
              type="text"
              className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
              placeholder="บ้านเลขที่ และถนน"
            />
            <div className="py-4">
              <Select>
                {" "}
                <SelectTrigger className="w-[180px] justify-between px-4 py-4 mt-3 text-base leading-7 bg-white rounded-md  text-zinc-500 max-md:max-w-full w-full">
                  {" "}
                  <SelectValue placeholder="เขต/ตำบล" />{" "}
                </SelectTrigger>{" "}
                <SelectContent>
                  {" "}
                  <SelectGroup>
                    {" "}
                    <SelectLabel>address</SelectLabel>{" "}
                    <SelectItem value="address1">address1</SelectItem>{" "}
                    <SelectItem value="address2">address2</SelectItem>{" "}
                    <SelectItem value="address3">address3</SelectItem>{" "}
                  </SelectGroup>{" "}
                </SelectContent>{" "}
              </Select>
            </div>
            <div className="pb-2">
              <Select>
                {" "}
                <SelectTrigger className="w-[180px] justify-between px-4 py-4 mt-3 text-base leading-7 bg-white rounded-md  text-zinc-500 max-md:max-w-full w-full">
                  {" "}
                  <SelectValue placeholder="แขวง/อำเภอ" />{" "}
                </SelectTrigger>{" "}
                <SelectContent>
                  {" "}
                  <SelectGroup>
                    {" "}
                    <SelectLabel>address</SelectLabel>{" "}
                    <SelectItem value="address1">address1</SelectItem>{" "}
                    <SelectItem value="address2">address2</SelectItem>{" "}
                    <SelectItem value="address3">address3</SelectItem>{" "}
                  </SelectGroup>{" "}
                </SelectContent>{" "}
              </Select>
            </div>
            <div className="flex gap-5 justify-between mt-3 text-base leading-7 whitespace-nowrap max-md:flex-wrap max-md:max-w-full w-full">
              <div className="w-full pb-2">
                <Select>
                  {" "}
                  <SelectTrigger className="justify-between px-4 py-4 mt-3 text-base leading-7 bg-white rounded-md  text-zinc-500 max-md:max-w-full w-full">
                    {" "}
                    <SelectValue placeholder="จังหวัด" />{" "}
                  </SelectTrigger>{" "}
                  <SelectContent>
                    {" "}
                    <SelectGroup>
                      {" "}
                      <SelectLabel>address</SelectLabel>{" "}
                      <SelectItem value="address1">address1</SelectItem>{" "}
                      <SelectItem value="address2">address2</SelectItem>{" "}
                      <SelectItem value="address3">address3</SelectItem>{" "}
                    </SelectGroup>{" "}
                  </SelectContent>{" "}
                </Select>
              </div>
              <input
                type="text"
                className="justify-center px-4 py-2 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full w-full"
                placeholder="รหัสไปรษณีย์"
              />
            </div>
            <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
              ข้อมูลเพิ่มเติม
            </div>
            <input
              type="text"
              className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full"
              placeholder=" หมายเหตุต่างๆ เช่น ...."
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full md:w-full  justify-center items-center">
          <div className="md:w-full">
            <div className="flex flex-col md:w-full px-6 py-4 bg-white rounded-md border border-solid border-zinc-500  max-md:px-5">
              <div className="text-3xl font-medium tracking-tight leading-8 text-neutral-900 max-md:max-w-full md:pb-8 lg:pb-8">
                Order summary
              </div>
              <div className="flex flex-col justify-center py-2  border-b border-gray-200 border-solid max-md:max-w-full md:justify-center items-center">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div className="md:justify-start md:items-start">
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x96"
                          className="w-full h-full aspect-[3.23] md:pr-12"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-2  border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div>
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x96"
                          className="w-full h-full aspect-[3.23] md:pr-12"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-2  border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col justify-center">
                    <div className="shrink-0 h-24 bg-purple-600" />
                  </div>
                  <div className="flex pb-1.5 gap-8">
                    <div>
                      <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded  max-md:pr-5">
                        <img
                          src="https://via.placeholder.com/80x200"
                          className="w-full h-full aspect-[3.23] md:pr-12"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-5 text-neutral-900">
                        Tray Table
                      </div>
                      <div className="mt-2 text-xs leading-5 text-zinc-500">
                        Color: Black
                      </div>
                      <div className="flex items-center self-stretch justify-center gap-3 px-2 py-2 rounded-sm bg-neutral-100">
                        <button className="px-2 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2">
                          -
                        </button>
                        <div>2</div>
                        <button className="px-2 py-2 rounded-sm hover:bg-gray-300 focus:outline-none focus:ring-2">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="justify-end items-end pl-20 ">390 บาท</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 text-base ">
                <input
                  type="text"
                  className="w-2/3 justify-center px-4 py-3.5 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-600"
                  placeholder="Input"
                />
                <button className="w-1/3 justify-center  px-7 py-3 font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg max-md:px-5">
                  Apply
                </button>
              </div>
              <div className="flex flex-col justify-center py-3.5 mt-4 text-base leading-7 border-b border-gray-200 border-solid max-md:max-w-full">
                <div className="flex gap-5 justify-center w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-2 whitespace-nowrap text-neutral-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfcb5e4788737dcb6dc75251bba3ca921ac5d4f139f9f21b869fccfd6aa970?"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Mutayloo</div>
                  </div>
                  <div className="flex-auto my-auto font-semibold text-right text-green-700">
                    -$20.00 [Remove]
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-3.5 text-base leading-7 whitespace-nowrap border-b border-gray-200 border-solid text-neutral-900 max-md:max-w-full">
                <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                  <div>Shipping</div>
                  <div className="my-auto font-semibold text-right">Free</div>
                </div>
              </div>
              <div className="flex gap-5 justify-center mt-3.5 text-xl font-medium leading-7 whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                <div>Total</div>
                <div className="my-auto text-right">$95.00</div>
              </div>
            </div>
          </div>
          <div className="md:w-full">
            <div className="flex flex-col px-6 py-10 rounded border border-solid border-zinc-500  max-md:px-5">
              <div className="text-xl font-medium leading-7 text-neutral-900 max-md:max-w-full">
                Payment method
              </div>
              <div className="flex flex-col pb-8 mt-6 border-b border-solid border-zinc-500 max-md:max-w-full">
                <div className="flex flex-col justify-center px-4 py-3.5 bg-gray-100 rounded border border-solid border-neutral-900 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pay By Credit Card
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-6 text-base leading-7 bg-white rounded border border-solid border-zinc-500 text-neutral-900 max-md:pr-5 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Prompt Pay
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-6 text-base leading-7 bg-white rounded border border-solid border-zinc-500 text-neutral-900 max-md:pr-5 max-md:max-w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cash on delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xs font-bold leading-3 uppercase text-zinc-500 max-md:max-w-full">
                Card Number
              </div>
              <input
                type="text"
                className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500 text-zinc-500 max-md:max-w-full"
                placeholder="1234 1234 1234"
              />
              <div className="flex gap-5 mt-6 text-zinc-500 mr-4">
                <div className="flex flex-col w-1/2">
                  <div className="text-xs font-bold leading-3 uppercase ">
                    Expiration date
                  </div>
                  <input
                    type="text"
                    className="justify-center px-4 py-2 mt-3 text-base leading-7 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="text-xs font-bold leading-3 uppercase">
                    CVC
                  </div>
                  <input
                    type="text"
                    className="justify-center px-4 py-2 mt-3 text-base leading-7 bg-white rounded-md border border-solid border-zinc-500"
                    placeholder="CVC code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 mt-4 justify-center items-center lg:mr-14">
            <button
              type="submit"
              className="justify-center items-center px-24  py-3 text-base font-medium tracking-tight leading-7 text-center text-white whitespace-nowrap bg-purple-600 rounded-lg w-full "
            >
              สั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
