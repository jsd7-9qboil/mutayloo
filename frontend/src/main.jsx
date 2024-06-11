// import react
import React from "react";
import ReactDOM from "react-dom/client";

// global styles
import "@/style/index.css";

// router
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.jsx";
import { Home } from "@/pages/home/Home.jsx";
import { Horoscope } from "@/pages/horoscope/Horoscope.jsx";
import { ContactUs } from "@/pages/contact-us/ContactUs.jsx";
import { ProductsList } from "@/pages/products-list/ProductsList.jsx";
import { ProductDetail } from "@/pages/product-detail/ProductDetail.jsx";
import DevDocument from "./pages/DevDocument";
import SignIn from "@/pages/sign-in/Sign-in.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/horoscope",
				element: <Horoscope />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
			{
				path: "/products-list",
				element: <ProductsList />,
			},
			{
				path: "/product-detail",
				element: <ProductDetail />,
			},
			{
				path: "/signin",
				element: <SignIn />,
			},
		],
	},
	// Dev Document
	{
		path: "/document",
		element: <DevDocument />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
=======
import { RouterProvider } from "react-router-dom";
import router from "@/router/rounter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
>>>>>>> 46b7abfed0d7d1a11dc7ae511ca737c32ccbf64e
