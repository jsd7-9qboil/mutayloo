import React, { useContext } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CouponForm from "./components/CouponForm";
// context
import { CartContext } from "@/context/CartContext";
import Status from "../Status";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 1.0;
  const discount = 3.0;
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto">
      <Status />

      

      <div className="flex space-x-4">
        <div className="w-3/4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="w-1/4">
          <CouponForm />
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
