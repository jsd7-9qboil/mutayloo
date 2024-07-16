import React from "react";
// hooks
import useCart from "@/hooks/useCart";
// components
import Head from "../components/Head";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, loading } = useCart();

  if (loading) {
    return <p>Loading...</p>;
  }

  const calculateTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const shippingCost = 1; // Example shipping cost

  const totalPrice = calculateTotalPrice();
  const finalPrice = totalPrice + shippingCost;

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
        {cart?.cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.cartItems.map((item) => (
            <CartItem key={item.product._id} item={item} />
          ))
        )}
      </section>
      {/* total and coupon */}
      {cart.cartItems && cart.cartItems.length > 0 && (
        <section className="my-12 grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-4"></div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-medium">ราคารวม</p>
              <p className="text-lg font-semibold">{totalPrice.toFixed(2)} $</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">ค่าส่ง</p>
              <p className="text-lg font-semibold">{shippingCost} $</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">ส่วนลด</p>
            </div>
            <Separator className="h-[2px]" />
            <div className="flex justify-between">
              <p className="font-medium">ราคารวมทั้งหมด</p>
              <p className="text-lg font-semibold">{finalPrice.toFixed(2)} $</p>
            </div>
            <Button className="w-full my-2">ชําระเงิน</Button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Cart;
