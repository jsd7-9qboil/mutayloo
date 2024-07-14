import React from "react";
// icons
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";
import { X } from "lucide-react";

// components
import Head from "../components/Head";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <main className="container">
      <Head step={2} />
      {/* display cart */}
      <section className="w-full">
        {/* head */}
        <div className="grid grid-cols-12">
          <p className="col-span-8">สินค้า</p>
          <p className="col-span-1 text-center">ราคา</p>
          <p className="col-span-2 text-center">จำนวน</p>
          <p className="col-span-1 invisible">action</p>
        </div>
        <Separator className="my-4 h-1" />
        {/* body */}
        <div className="w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-8 lg:col-span-8">
              <div className="flex gap-4">
                <figure className="min-w-32 min-h-32 lg:w-max-56 lg:h-max-56">
                  <img
                    src="https://via.placeholder.com/250"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="w-full flex flex-col gap-2 justify-center">
                  <p className="text-xl lg:text-2xl font-bold">ชื่อสินค้า</p>
                  <p className="text-sm lg:text-base">Color: Black</p>
                  <p className="text-sm font-medium lg:hidden">199.00$</p>
                </div>
              </div>
            </div>
            <p className="hidden col-span-1 text-xl font-medium lg:flex justify-center items-center">
              199.00$
            </p>
            <div className="col-span-4 sm:col-span-3 lg:col-span-2 flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <div className="flex justify-end sm:hidden">
                  <Button variant="ghost" size="icon">
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 border rounded-lg">
                  <Button variant="ghost" size="icon" className="w-8">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-2 py-1.5 text-lg font-semibold">1</span>
                  <Button variant="ghost" size="icon" className="w-8">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden col-span-1 sm:flex justify-center items-center">
              <Button variant="destructive" size="icon">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Separator className="my-4 h-[2px]" />
        </div>
      </section>

      {/* total and coupon */}
      <section className="my-12 grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="col-span-4"></div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-medium">ราคารวม</p>
            <p className="text-lg font-semibold">199.00 $</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">ค่าส่ง</p>
            <p className="text-lg font-semibold">1 $</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">ส่วนลด</p>
            <p className="text-lg font-semibold">3 $</p>
          </div>
          <Separator className="h-[2px]" />
          <div className="flex justify-between">
            <p className="font-medium">ราคารวมทั้งหมด</p>
            <p className="text-lg font-semibold">196.00$</p>
          </div>
          <Button className="w-full my-2">ชําระเงิน</Button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
