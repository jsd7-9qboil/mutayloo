// src/auth/SignOut.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ signOut }) => {
	const navigate = useNavigate();

	useEffect(() => {
		signOut();
	}, [signOut, navigate]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");

		navigate("/");
	};

	return <div>handleLogout</div>;
};

export default SignOut;
