import apiClient from "./apiCart";

// create order
export const createOrder = (items) =>
  apiClient.post("/orders/create", { items });

// get user orders
export const fetchUserOrders = () => apiClient.get("/orders");