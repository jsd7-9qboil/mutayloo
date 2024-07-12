import React from "react";
import ReactDOM from "react-dom/client";

// global css
import "./index.css";

// route
import { RouterProvider } from "react-router-dom";
import router from "./router";

// context
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>
);
