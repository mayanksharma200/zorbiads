import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import SmartLinks from "./components/SmartLinks";
import PaymentMethodsCarousel from "./components/PaymentMethodsCarousel";
import AdFormatsCarousel from "./components/AdFormatsCarousel";
import SwiperComponent from "./components/SwiperComponent";
import AAnetwork from "./components/AAnetwork";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
        <HeroSection />
        <AAnetwork/>
        {/* <SmartLinks /> */}
        <div className="flex justify-center items-center min-h-screen bg-dark-100">
          <AdFormatsCarousel />
        </div>
        {/* <SwiperComponent /> */}
        <FeatureSection id="features" />
        {/* <Workflow /> */}
        {/* <Pricing /> */}
        <Testimonials />
        <div className="my-10">
          <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Supported Payment Methods
          </h2>
          <PaymentMethodsCarousel />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
