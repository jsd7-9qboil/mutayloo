import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-24 h-24" />
        <div className="ml-4">
          <h2 className="text-lg">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.color}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p>${item.price}</p>
        <div className="flex items-center">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="w-12 border text-center mx-2"
          />
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p>${item.price * item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500"
        >
          ลบ
        </button>
      </div>
    </div>
  );
};

export default CartItem;
