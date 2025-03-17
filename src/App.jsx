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

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
      <Navbar />
        <HeroSection />
        <SmartLinks />
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <AdFormatsCarousel />
        </div>
        <FeatureSection id="features" />
        {/* <Workflow /> */}
        {/* <Pricing /> */}
        <Testimonials />
        <div className="my-10">
          <h2 className="text-center text-2xl font-semibold">
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
