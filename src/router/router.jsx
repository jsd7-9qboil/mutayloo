// router
import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import { Home } from "@/pages/home/Home.jsx";
import { Horoscope } from "@/pages/horoscope/Horoscope.jsx";
import { ContactUs } from "@/pages/contact-us/ContactUs.jsx";
import { ProductsList } from "@/pages/products-list/ProductsList.jsx";
import { ProductDetail } from "@/pages/product-detail/ProductDetail.jsx";
import DevDocument from "@/pages/DevDocument";
import SignIn from "@/pages/sign-in/Sign-in";
import SignUp from "@/pages/sign-up/Sign-up";

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
				path: "/product/:name",
				element: <ProductDetail />,
			},
			{
				path: "/sign-in",
				element: <SignIn />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},
		],
	},
	// Dev Document
	{
		path: "/document",
		element: <DevDocument />,
	},
]);

export default router;
