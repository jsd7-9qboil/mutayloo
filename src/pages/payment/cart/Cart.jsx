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
      </section>

      {/* total and coupon */}
    </main>
  );
};

export default Cart;
