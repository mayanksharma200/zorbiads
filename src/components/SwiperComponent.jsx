import { motion } from "framer-motion";
import image from "../assets/myimages/home1.jpg"; // Adjust the path accordingly
import { useRef } from "react";
import { useInView } from "framer-motion";

const SlideContent = ({ title, points }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="p-8"
  >
    <h2 className="text-4xl font-extrabold text-orange-500">{title}</h2>
    <ul className="mt-4 text-lg text-gray-300">
      {points.map((point, index) => (
        <motion.li
          key={index}
          className="mt-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          • {point}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SwiperComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const slideData = [
    {
      title: "Zorbit Ads for DSPs",
      points: [
        "Avoid multiple integrations with Ad Exchanges. Save your time and engineering efforts.",
        "Get access to unlimited inventory. Reach out to every last user on the internet.",
        "Do not have to worry about minimum guarantees. We connect you with every major exchange.",
      ],
    },
    {
      title: "Zorbit Ads for SSPs",
      points: [
        "Increase the demand for your inventory. Monetise every single impression you get through multiple DSPs.",
        "Reduce the payload of your product. You just need one SDK now for multiple exchanges.",
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen bg-neutral-900"
    >
      <div
        className={`w-full max-w-6xl flex flex-col md:flex-row items-center transition-opacity duration-500 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.img
          src={image}
          alt="Slide Image"
          className="w-full md:w-2/3 h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={isInView ? { opacity: 1, scale: 0.8, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", bounce: 0.4 }}
        />
        <div className="w-full md:w-1/3 flex flex-col">
          {slideData.map((data, index) => (
            <SlideContent key={index} title={data.title} points={data.points} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
