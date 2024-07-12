import { createBrowserRouter } from "react-router-dom";
// layout
import Layout from "./pages/Layout";
// pages
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
import Checkout from "./pages/payment/cart/Checkout";
import OrderComplete from "./pages/payment/cart/OrderComplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // home
      {
        path: "",
        element: <Home />,
      },

      // products
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },

      // cart
      {
        path: "/cart",
        element: <Cart />,
      },

      // checkout
      {
        path: "/checkout",
        element: <Checkout />,
      
      },

      // complete
      {
        path: "/ordercomplete",
        element: <OrderComplete />,
      
      },




      // horoscope
      {
        path: "/horoscope",
        element: <Horoscope />,
      },
      {
        path: "/horoscope/:id",
        element: <HoroscopeDetail />,
      },

      // contact us
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      // sign-in, sign-up
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },

      // account
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
          },
        ],
      },
    ],
  },
]);

export default router;
