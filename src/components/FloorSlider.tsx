import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floorImages } from "../constants/floorImages";
import { floors } from "../constants/floors";
import ClueModal from "./ClueModal";
import { useBag } from "../hooks/useBag";
import ShinyText from "./ShinyText";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import QuestionMark from "./icons/QuestionMark";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import HintToast from "./HintToast";
import { useSound } from "../hooks/useSound";
import { clues } from "../constants/clues";
0;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 3, ease: "easeInOut" },
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
  const handleClose = () => {
    playSound("checkItem");
    setSelectedClue(null);
  };
  const { addItem, hasItem, bag } = useBag();
  const [showHint, setShowHint] = useState<string | null>(null);
  const [hasUnlockedBookmark, setHasUnlockedBookmark] = useState(false);
  const { playSound } = useSound();

  const next = () => {
    playSound("doorOpenCloses");
    setDirection(1);
    setIndex((prev) => (prev + 1) % floorImages.length);
  };
  const prev = () => {
    playSound("doorOpenCloses");
    setDirection(-1);
    setIndex((prev) => (prev - 1 + floorImages.length) % floorImages.length);
  };

  const handleAddItem = (clue: any) => {
    const excludedTitles = [
      "Rejtett számlakönyv",
      "Francia nyelvű levél",
      "Vérfoltos ruha",
      "Nyomozó",
      "Kutatási jegyzetek",
      "Férfi lábnyomok a padláson",
      "A tőr és a gyűrű",
    ];

    const bookmarkUnlockers = ["Egy vérfoltos kesztyű", "Szemtanúi állítás"];

    const newBagSize = bag.length + (hasItem(clue.title) ? 0 : 1);

    addItem(clue);

    if (newBagSize >= 21) {
      setTimeout(() => {
        playSound("wonTurn");
        setShowHint(
          "Szép munka! 👏 Az összes nyomot megtaláltátok! Itt az idő megtekinteni a táska tartalmát..."
        );
        setTimeout(() => setShowHint(null), 5000);
      }, 2000);
      return;
    }

    if (excludedTitles.includes(clue.title)) return;

    if (bookmarkUnlockers.includes(clue.title)) {
      if (hasUnlockedBookmark) return;

      setHasUnlockedBookmark(true);

      setTimeout(() => {
        playSound("newClueAppeared");
        setShowHint("Egy új nyom jelent meg valahol...");
        setTimeout(() => setShowHint(null), 5000);
      }, 2000);

      return;
    }

    setTimeout(() => {
      playSound("newClueAppeared");

      if (clue.title === "A „könyvjelző”") {
        setShowHint("Figyelem! Új nyomok jelentek meg!");
      } else {
        setShowHint("Egy új nyom jelent meg valahol...");
      }

      setTimeout(() => setShowHint(null), 5000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex items-center justify-center text-white w-full"
    >
      <div className="relative w-full max-w-[1080px] min-h-[580px] aspect-video overflow-hidden rounded-2xl">
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

            <div className="absolute font-libre-bold top-4 left-1/2 -translate-x-1/2 text-2xl font-bold bg-tint/80 px-6 py-2">
              <ShinyText
                text={floors[index].title}
                disabled={false}
                speed={3}
              />
            </div>

            {floors[index].clues
              .filter((c) => {
                if (!c.clue.requires) return true;

                const requiredItems = Array.isArray(c.clue.requires)
                  ? c.clue.requires
                  : [c.clue.requires];

                return requiredItems.some((req) => hasItem(req));
              })
              .map((c) => {
                const found = hasItem(c.clue.title);

                return (
                  <div
                    key={c.clue.title}
                    className="absolute flex items-center justify-center"
                    style={{ top: c.top, left: c.left }}
                  >
                    <span
                      className={`absolute inline-flex w-5 h-5 rounded-full ${
                        found ? "bg-green-500" : "bg-paper"
                      } opacity-50 animate-ping`}
                    />
                    <div
                      className={`group relative w-5 h-5 rounded-full border-2 border-tint cursor-pointer transition-all duration-500 ${
                        found ? "bg-green-500" : "bg-paper"
                      } hover:border-tint hover:scale-[2.5]`}
                      onClick={() => {
                        playSound("defaultClick");
                        setSelectedClue(c);
                      }}
                    >
                      {found ? (
                        <CheckmarkIcon
                          className="absolute fill-tint pointer-events-none opacity-0 transition-all duration-1000 scale-0 group-hover:opacity-100 group-hover:scale-[0.35] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                          width="25px"
                          height="25px"
                        />
                      ) : (
                        <QuestionMark
                          className="absolute fill-tint pointer-events-none opacity-0 transition-all duration-1000 scale-0 group-hover:opacity-100 group-hover:scale-[0.35] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                          width="25px"
                          height="25px"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-tint/80 hover:bg-tint p-3 rounded-full transition"
        >
          <ChevronLeftIcon width="30px" className="stroke-paper" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-tint/80 hover:bg-tint p-3 rounded-full transition"
        >
          <ChevronRightIcon width="30px" className="stroke-paper" />
        </button>

        <div className="absolute bottom-0 w-full flex justify-center gap-2">
          {floorImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition border-2 border-tint ${
                i === index ? "bg-white" : "bg-tint"
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
                <ClueModal
                  clue={selectedClue.clue}
                  found={hasItem(selectedClue.clue.title)}
                  addItem={handleAddItem}
                  onClose={handleClose}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <HintToast message={showHint || ""} visible={!!showHint} />
    </motion.div>
  );
};

export default FloorSlider;
