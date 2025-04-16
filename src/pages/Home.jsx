import Header from "../components/common/Header";
import AboutUs from "../components/home/Aboutus";
import Amenties from "../components/home/Amenties";
import HeroSection from "../components/Home/HeroSection";
import PriceList from "../components/home/PriceList";
import Footer from "../components/home/Footer";
import Gallery from "../components/home/Gallery";
import Contact from "../components/home/Contact";
import LocationMap from "../components/home/LocationMap";
import Specifications from "../components/home/Specifications";
import MasterAndFloorPlans from "../components/home/MasterAndFloorPlans";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Amenties />
      <PriceList />
      <Specifications />
      <LocationMap />
      <MasterAndFloorPlans />
      <Gallery />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
