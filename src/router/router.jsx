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
import { HoroscopeDetail } from "../pages/horoscope/HoroscopeDetail";
import Account from "../pages/account/Account";
import MyAccount from "../pages/account/components/MyAccount";
import Address from "../pages/account/components/Address";
import Order from "../pages/account/components/Order";
import WishList from "../pages/account/components/WishList";

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
				path: "/horoscope-detail",
				element: <HoroscopeDetail />,
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
			{
				path: "account",
				element: <Account />,
				children: [
					{
						path: "",
						element: <MyAccount />,
					},
					{
						path: "address",
						element: <Address />,
					},
					{
						path: "orders",
						element: <Order />,
					},
					{
						path: "wishlist",
						element: <WishList />,
					}
				]
			}
		],
	},
	// Dev Document
	{
		path: "/document",
		element: <DevDocument />,
	},
]);

export default router;
