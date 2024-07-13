import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ProductsList from "./pages/products-archive/ProductsList";
import Cart from "./pages/payment/cart/Cart";
import Horoscope from "./pages/horoscope/Horoscope";
import ContactUs from "./pages/contact-us/ContactUs";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Account from "./pages/account/Account";
import MyAccount from "./pages/account/components/MyAccount";
import Address from "./pages/account/components/Address";
import Order from "./pages/account/components/Order";
import WishList from "./pages/account/components/WishList";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "products", element: <ProductsList /> },
			{
				path: "cart",
				element: (
					<ProtectedRoute>
						<Cart />
					</ProtectedRoute>
				),
			},
			{ path: "horoscope", element: <Horoscope /> },
			{ path: "contact-us", element: <ContactUs /> },
			{ path: "sign-in", element: <SignIn /> },
			{ path: "sign-up", element: <SignUp /> },
			{
				path: "account",
				element: (
					<ProtectedRoute>
						<Account />
					</ProtectedRoute>
				),
				children: [
					{ path: "", element: <MyAccount /> },
					{ path: "address", element: <Address /> },
					{ path: "orders", element: <Order /> },
					{ path: "wishlist", element: <WishList /> },
				],
			},
		],
	},
]);

export default router;
