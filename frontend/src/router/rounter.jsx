// router
import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import { Home } from "@/pages/home/Home.jsx";
import { Horoscope } from "@/pages/horoscope/Horoscope.jsx";
import { ContactUs } from "@/pages/contact-us/ContactUs.jsx";
import { ProductsList } from "@/pages/products-list/ProductsList.jsx";
import { ProductDetail } from "@/pages/product-detail/ProductDetail.jsx";
import DevDocument from "@/pages/DevDocument";
import { HoroscopeDetail } from "@/pages/horoscope/HoroscopeDetail.jsx";

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
        path: "/horoscope-detail",
        element: <HoroscopeDetail />,
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