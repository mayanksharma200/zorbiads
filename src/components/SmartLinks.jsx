import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import heroImg from "../assets/images/hero-main-1.png";
import etoroLogo from "../assets/images/etoro_logo-grey.svg";
import cryptoLogo from "../assets/images/crypto-com-grey.svg";
import winLogo from "../assets/images/1win.svg";
import awLogo from "../assets/images/aw.svg";
import affliftLogo from "../assets/images/afflift.svg";
import imliveLogo from "../assets/images/imlive.svg";
import affbankLogo from "../assets/images/affbank.svg";
import businessAppLogo from "../assets/images/business-app.svg";

const SmartLinks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const clientLogos = [
    etoroLogo,
    cryptoLogo,
    winLogo,
    awLogo,
    affliftLogo,
    imliveLogo,
    affbankLogo,
    businessAppLogo,
  ];

  return (
    <div id="smartlinks" className="bg-gray-100 my-8">
      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-wrap items-center">
        {/* Left Content */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            SmartLink Turns Every Traffic into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-800 text-transparent bg-clip-text">
              High Profit
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Monetize with SmartLink (Direct Link) that automatically routes
            visitors to their most relevant offers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
            >
              Start Earning
              <ArrowRight size={18} />
            </a>
            <a
              href="smartlink.html"
              className="px-6 py-3 text-blue-600 hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Trusted By */}
          <div className="mt-10">
            <p className="text-gray-500 font-semibold">
              Trusted by the world’s biggest brands
            </p>
            {/* <div className="flex space-x-4 mt-4">
              {clientLogos.slice(0, 3).map((logo, index) => (
                <img key={index} src={logo} alt="Client" className="h-10" />
              ))}
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={heroImg} alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Clients Slider */}
      {/* <section className="py-10 bg-gray-200">
        <Swiper slidesPerView={5} loop autoplay={{ delay: 2000 }}>
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={logo} alt="Client" className="h-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
    </div>
  );
};

export default SmartLinks;
