import AboutUs from "./components/AboutUs";
import Hastag from "./components/Hastag";
import HeroBanner from "./components/HeroBanner";
import HoroscopeBanner from "./components/HoroscopeBanner";
import OurProducts from "./components/OurProducts";
import ShopByPower from "./components/ShopByPower";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <AboutUs />
      <ShopByPower />
      <OurProducts />
      <HoroscopeBanner />
      <Hastag />
    </main>
  );
};

export default Home;
