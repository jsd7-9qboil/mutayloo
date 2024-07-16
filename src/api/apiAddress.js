import apiClient from "./apiClient";

export const addAddress = async (addressData) => {
	return apiClient.post("/addresses/add", addressData);
};

export const getAllAddresses = async () => {
	return apiClient.get("/addresses");
};

export const getAddressById = async (id) => {
	return apiClient.get(`/addresses/${id}`);
};

export const getAddressesByCustomerId = async (customerId) => {
	return apiClient.get(`/addresses/customer/${customerId}`);
};

export const updateAddress = async (id, addressData) => {
	return apiClient.patch(`/addresses/${id}`, addressData);
};

export const deleteAddress = async (id) => {
	return apiClient.delete(`/addresses/${id}`);
};
