import apiClient from "./apiClient";

//Login
export const login = async (email, password) => {
	return apiClient.post("/users/login", {
		email,
		password,
	});
};

// get users profile
export const fetchUsers = async () => {
	return apiClient.get("/profile");
};
