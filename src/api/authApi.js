import apiClient from "./apiClient";

// Login
export const login = async (email, password) => {
  return apiClient.post("/users/login", { email, password });
};

// Get user profile
export const getProfile = async () => {
  return apiClient.get("/users/profile");
};

// Update user profile
export const updateProfile = async (userData) => {
  return apiClient.patch("/users/profile", userData);
};

// Register
export const registerProfile = async (userData) => {
  return apiClient.post("/users/register", userData);
};
