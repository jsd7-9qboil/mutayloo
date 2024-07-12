import axios from "axios";

const LOGIN_URL = "https://mutayloo.vercel.app/users/login";

const login = async (email, password) => {
	try {
		const response = await axios.post(LOGIN_URL, {
			email,
			password,
		});
		return response.data; // Ensure the response data structure matches what the frontend expects
	} catch (error) {
		// Check if error response exists and has a message
		if (error.response && error.response.data && error.response.data.message) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("Something went wrong");
		}
	}
};

export default login;
