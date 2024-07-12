import apiClient from "./apiClient";

//Login
export const login = async (email, password) => {
	return apiClient.post("/users/login", {
		email,
		password,
	});
};
