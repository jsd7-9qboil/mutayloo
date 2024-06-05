// import react
import React from "react";
import ReactDOM from "react-dom/client";

// app and global styles
import App from "./App.jsx";
import "./style/index.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Horoscope } from "./pages/horoscope/Horoscope.jsx";
import { ContactUs } from "./pages/contact-us/ContactUs.jsx";
import { ProductsList } from "./pages/products-list/ProductsList.jsx";
import { ProductDetail } from "./pages/product-detail/ProductDetail.jsx";

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
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
