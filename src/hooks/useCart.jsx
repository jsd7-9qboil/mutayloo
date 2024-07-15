import { useContext } from "react";
import CartContext from "@/context/CartContext";
import { addToCart, updateCartItem, removeCartItem } from "../api/apiCart";

const useCart = () => {
  const { cart, loading, setCart } = useContext(CartContext);

  const addItem = async (productId, quantity) => {
    try {
      const response = await addToCart(productId, quantity);
      setCart(response.data.cart);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const updateItem = async (productId, quantity) => {
    try {
      const response = await updateCartItem(productId, quantity);
      setCart(response.data.cart);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await removeCartItem(productId);
      setCart(response.data.cart);
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    }
  };

  return {
    cart,
    loading,
    addItem,
    updateItem,
    removeItem,
  };
};

export default useCart;
