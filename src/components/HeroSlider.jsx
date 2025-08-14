import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Get the Best Broadband Deals",
    description: "Compare top broadband plans and save more every month.",
    img: "https://images.unsplash.com/photo-1510511336377-1a9caa095849?q=80&w=1200&auto=format&fit=crop",
    button: "Compare Broadband"
  },
  {
    title: "SIM Only Offers",
    description: "Flexible plans with the best value for your data needs.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    button: "View SIM Deals"
  },
  {
    title: "Travel Only Plans",
    description: "Stay connected on your journeys with affordable roaming.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    button: "Explore Travel Plans"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20">
        <motion.h1
          key={slides[index].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold max-w-2xl"
        >
          {slides[index].title}
        </motion.h1>
        <motion.p
          key={slides[index].description}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-white/90 max-w-xl"
        >
          {slides[index].description}
        </motion.p>
        <motion.a
          key={slides[index].button}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          href="#"
          className="mt-6 inline-flex px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 transition"
        >
          {slides[index].button}
        </motion.a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-red-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
