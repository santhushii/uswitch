import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Scroll reveal animation
const revealVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const slides = [
    {
      title: "Broadband Deals That Save You More",
      description:
        "Compare top broadband providers and enjoy faster internet for less.",
      img: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // sleek fiber optics
      button: "Compare Broadband",
    },
    {
      title: "SIM Only Plans with Big Savings",
      description:
        "Flexible monthly contracts designed for your data and budget.",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // clean SIM card close-up
      button: "View SIM Deals",
    },
    {
      title: "Latest Mobile Phone Offers",
      description:
        "Get the latest smartphones with plans that suit your lifestyle.",
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // premium smartphone close-up
      button: "Shop Mobile Phones",
    },
    {
      title: "Travel Connectivity, Anywhere",
      description:
        "Stay connected while abroad with affordable travel data plans.",
      img: "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // airplane wing / travel shot
      button: "Explore Travel Plans",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SLIDESHOW */}
      <section className="relative w-full h-screen overflow-hidden text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].img}
              alt={slides[index].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <motion.h1
            key={slides[index].title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold max-w-3xl"
          >
            {slides[index].title}
          </motion.h1>
          <motion.p
            key={slides[index].description}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-xl text-white/90 max-w-xl"
          >
            {slides[index].description}
          </motion.p>
          <motion.a
            key={slides[index].button}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            href="#products"
            className="mt-6 inline-flex px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 transition text-lg font-medium"
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
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-red-600" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* DISCOVERY GRID */}
      <motion.section
        className="bg-rose-50"
        id="discover"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">
            See where else you can save
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Car insurance",
              "Home insurance",
              "New boilers",
              "Current accounts",
              "Credit cards",
              "Mortgages",
            ].map((item) => (
              <button
                key={item}
                className="px-4 py-3 rounded-lg border border-rose-200 bg-white hover:border-red-400 hover:text-red-700 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SAVINGS CARDS */}
      <motion.section
        className="bg-white"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl font-extrabold">Save more on your bills</h3>
            <p className="mt-2 text-gray-600">
              Switch today and beat rising prices. We do all the legwork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Switch energy & save",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // clean light bulb
              },
              {
                title: "Beat broadband hikes",
                img: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1", // fiber optics close-up
              },
              {
                title: "Go SIM-only & save",
                img: "https://images.pexels.com/photos/1054389/pexels-photo-1054389.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1", // minimal SIM card
              },
            ].map(({ title, img }) => (
              <motion.article
                key={title}
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition"
              >
                <img src={img} alt={title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Find better deals in minutes. Compare now.
                  </p>
                  <a
                    href="#products"
                    className="mt-4 inline-flex items-center text-red-700 font-medium hover:underline"
                  >
                    View deals →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
