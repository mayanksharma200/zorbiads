import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Title with Framer Motion (Fade Top) */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-gray-900"
      >
        Advertise and
        <span className="bg-gradient-to-r from-blue-500 to-indigo-800 text-transparent bg-clip-text">
          {" "}
          Monetize
        </span>
      </motion.h1>

      {/* Description with Framer Motion (Fade Bottom) */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-10 text-lg text-center text-gray-700 max-w-4xl"
      >
        We supply advertisers with traffic and help publishers monetize using
        smart links and various formats.
      </motion.p>

      {/* Buttons with Motion (Fade Left & Right) */}
      <div className="flex justify-center my-10">
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          href="#"
          className="bg-gradient-to-r from-blue-500 to-indigo-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start for free
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-gray-400 text-gray-900"
        >
          Documentation
        </motion.a>
      </div>

      {/* Swiper for Videos (Fade Bottom using AOS) */}
      <div className="w-full max-w-4xl mt-10" data-aos="fade-bottom">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full border border-gray-300 shadow-md shadow-gray-400"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full border border-gray-300 shadow-md shadow-gray-400"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
