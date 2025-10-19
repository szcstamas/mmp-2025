import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floorImages } from "../constants/FloorImages";

const FloorSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % floorImages.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + floorImages.length) % floorImages.length);

  return (
    <div className="flex items-center justify-center text-white w-full">
      <div className="relative w-full max-w-[900px] aspect-video overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={floorImages[index]}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
        >
          Balra
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
        >
          Jobbra
        </button>

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {floorImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorSlider;
