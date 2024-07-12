import React from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const isAuth = useIsAuthenticated();

	return isAuth() ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
