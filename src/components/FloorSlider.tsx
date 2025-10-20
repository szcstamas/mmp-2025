import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floorImages } from "../constants/floorImages";
import { floors } from "../constants/floors";
import ClueCard from "../components/ClueCard";
import { useBag } from "../hooks/useBag";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

const FloorSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedClue, setSelectedClue] = useState<{
    clue: any;
    top: string;
    left: string;
  } | null>(null);
  const handleClose = () => setSelectedClue(null);
  const { addItem, hasItem } = useBag();

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % floorImages.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + floorImages.length) % floorImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex items-center justify-center text-white w-full"
    >
      <div className="relative w-full max-w-[900px] aspect-video overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full h-full"
          >
            <img
              src={floors[index].image}
              alt={floors[index].title}
              className="absolute w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute font-libre-bold top-4 left-1/2 -translate-x-1/2 text-paper text-2xl font-bold bg-tint/80 px-6 py-2">
              {floors[index].title}
            </div>

            {floors[index].clues.map((c) => {
              const found = hasItem(c.clue.title);

              return (
                <div
                  key={c.clue.title}
                  className={`absolute w-5 h-5 ${
                    found ? "bg-green-500" : "bg-red-500"
                  } rounded-full cursor-pointer border-2 border-tint transition-all duration-500 hover:bg-paper hover:border-tint hover:scale-150 hover:sepia`}
                  style={{ top: c.top, left: c.left }}
                  onClick={() => setSelectedClue(c)}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute -left-0 top-1/2 -translate-y-1/2 bg-tint/80 hover:bg-tint p-3 rounded-full transition"
        >
          Balra
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-tint/80 hover:bg-tint p-3 rounded-full transition"
        >
          Jobbra
        </button>

        <div className="absolute bottom-0 w-full flex justify-center gap-2">
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

        <AnimatePresence>
          {selectedClue && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-tint/70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClue(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ClueCard
                  clue={selectedClue.clue}
                  found={hasItem(selectedClue.clue.title)}
                  addItem={addItem}
                  onClose={handleClose}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloorSlider;
