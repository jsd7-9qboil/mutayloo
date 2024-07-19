import React, { createContext, useState, useEffect } from "react";
import { fetchCart } from "../api/apiCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await fetchCart();
        setCart(response.data);
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, loading, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
