import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ProductsList from "./pages/products-archive/ProductsList";
import ProductDetail from "./pages/products-archive/ProductDetail";
import Horoscope from "./pages/horoscope/Horoscope";
import HoroscopeDetail from "./pages/horoscope/HoroscopeDetail";
import ContactUs from "./pages/contact-us/ContactUs";
import Account from "./pages/account/Account";
import MyAccount from "./pages/account/components/MyAccount";
import Address from "./pages/account/components/Address";
import Order from "./pages/account/components/Order";
import WishList from "./pages/account/components/WishList";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/payment/cart/Cart";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/products",
				element: <ProductsList />,
			},
			{
				path: "/product/:id",
				element: <ProductDetail />,
			},
			{
				path: "/cart",
				element: <PrivateRoute />,
				children: [
					{
						path: "",
						element: <Cart />,
					},
				],
			},
			{
				path: "/horoscope",
				element: <Horoscope />,
			},
			{
				path: "/horoscope/:id",
				element: <HoroscopeDetail />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
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
				element: <PrivateRoute />,
				children: [
					{
						path: "",
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
							},
						],
					},
				],
			},
		],
	},
]);

export default router;
