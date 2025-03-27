import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AAnetwork = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 15 }).map(() => ({
        id: Math.random(),
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        scale: Math.random() * 1.2 + 0.8,
        opacity: Math.random() * 0.4 + 0.6,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="adsnetwork"
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-900 mt-10"
    >
      {/* Animated Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-xl"
          style={{ left: sparkle.x, top: sparkle.y }}
          animate={{
            opacity: [0, sparkle.opacity, 0],
            scale: [0, sparkle.scale, 0],
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}

      {/* Heading and Buttons */}
      <div className="relative z-10 text-center text-neutral-100 px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight drop-shadow-lg bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Advanced AdTech Platform
        </motion.h1>
        <motion.p
          className="text-xl mt-4 opacity-90 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering businesses with a unique partner care approach
        </motion.p>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.button
            className="px-8 py-3 rounded-lg bg-orange-600 text-neutral-100 font-semibold shadow-lg hover:bg-orange-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            BUY TOP TRAFFIC →
          </motion.button>
          <motion.button
            className="px-8 py-3 rounded-lg bg-orange-600 text-neutral-100 font-semibold shadow-lg hover:bg-orange-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            START EARNING →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AAnetwork;
