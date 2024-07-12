import axios from "axios";

const LOGIN_URL = "http://localhost:5555/users/login";

const login = async (email, password) => {
	try {
		const response = await axios.post(LOGIN_URL, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message || "Something went wrong");
	}
};

export default login;
