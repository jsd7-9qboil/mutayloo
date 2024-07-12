import axios from "axios";

const REGISTER_URL = "http://localhost:5555/users/register";

const register = async (fname, lname, email, password, dob) => {
	try {
		const response = await axios.post(REGISTER_URL, {
			fname,
			lname,
			email,
			password,
			dob,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message || "Something went wrong");
	}
};

export default register;
