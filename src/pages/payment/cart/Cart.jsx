import React, { useState } from "react";
import useCart from "@/hooks/useCart";
import Head from "../components/Head";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [selectItems, setSelectItems] = useState([]);
  const { cart, loading } = useCart();
  const navigate = useNavigate();

  console.log(selectItems);

  if (loading) {
    return <p>Loading...</p>;
  }

  const calculateTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const shippingCost = 3;
  const totalPrice = calculateTotalPrice();
  const finalPrice = totalPrice + shippingCost;

  const handleCheckout = () => {
    const selectedProducts = cart.cartItems.filter((item) =>
      selectItems.includes(item.product._id)
    );
    navigate("/checkout", { state: { selectedProducts } });
  };

  return (
    <main className="container">
      <Head step={1} />
      <section className="w-full">
        <div className="grid grid-cols-12">
          <p className="col-span-8 md:px-2 lg:px-4 xl:px-16">Product</p>
          <p className="col-span-1 text-center">Price</p>
          <p className="col-span-2 text-center">Quantity</p>
          <p className="col-span-1 invisible">action</p>
        </div>
        <Separator className="my-4 h-1" />
        {cart?.cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.cartItems.map((item) => (
            <CartItem
              key={item.product._id}
              item={item}
              selectItems={selectItems}
              setSelectItems={setSelectItems}
            />
          ))
        )}
      </section>
      {cart.cartItems && cart.cartItems.length > 0 && (
        <section className="my-12 grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-4"></div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-medium">Total price</p>
              <p className="text-lg font-semibold">{totalPrice.toFixed(2)} Bath</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Shipping cost</p>
              <p className="text-lg font-semibold">{shippingCost} Bath</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Discount</p>
            </div>
            <Separator className="h-[2px]" />
            <div className="flex justify-between">
              <p className="font-medium">Total price</p>
              <p className="text-lg font-semibold">{finalPrice.toFixed(2)} Bath</p>
            </div>
            <Button onClick={handleCheckout} className="w-full my-2">
              Checkout
            </Button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Cart;
