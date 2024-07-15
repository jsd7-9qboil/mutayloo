import React from "react";
// components
import Head from "../components/Head";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
//
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { cart, updateItem, removeItem } = useCart();

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
        {cart && cart.cartItems && cart.cartItems.length > 0 ? (
          cart.cartItems.map((cartItem) => (
            <div key={cartItem.product._id} className="w-full">
              <CartItem
                cartItem={cartItem}
                updateItem={updateItem}
                removeItem={removeItem}
              />
              <Separator className="my-4 h-[2px]" />
            </div>
          ))
        ) : (
          <p className="text-center">ตะกร้าสินค้าว่างเปล่า</p>
        )}
      </section>

      {/* total and coupon */}
      {cart && cart.cartItems && cart.cartItems.length > 0 ? (
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
      ) : (
        <></>
      )}
    </main>
  );
};

export default Cart;
