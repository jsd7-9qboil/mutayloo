import React, { createContext, useReducer } from "react";

// create context
export const CartContext = createContext();

// cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        return [...state, { ...action.product, quantity: action.quantity }];
      }
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

// cart provider
export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", product, quantity });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
