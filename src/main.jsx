import React from "react";
import ReactDOM from "react-dom/client";

// global css
import "./index.css";

// route
import { RouterProvider } from "react-router-dom";
import router from "./router";

// context
import { CartProvider } from "./context/CartContext";
import AuthProvider from "react-auth-kit/AuthProvider";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

// notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>
);
