import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HatImage from "../../assets/img/others/Hat.png";
import SkullImage from "../../assets/img/others/Skull.png";
import GlareHover from "../GlareHover";
import { useSound } from "../../hooks/useSound";
import ShinyText from "../ShinyText";
import Decoration from "../../assets/img/others/Decoration.webp";

const HAT_COUNT = 5;
const SHUFFLE_TIMES = 24;
const SHUFFLE_SPEED = 0.4;

const ItemFinderGame = ({ onComplete }: { onComplete: () => void }) => {
  const [hats, setHats] = useState<number[]>(
    Array.from({ length: HAT_COUNT }, (_, i) => i)
  );
  const [pumpkinIndex, setPumpkinIndex] = useState<number>(
    Math.floor(Math.random() * HAT_COUNT)
  );
  const [isShuffling, setIsShuffling] = useState(false);
  const [isShufflingFinished, setIsShufflingFinished] = useState(false);
  const [isItemNotCorrect, setIsItemNotCorrect] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [showStartHint, setShowStartHint] = useState(false);
  const { playSound } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isShuffling) {
      let i = 0;
      const interval = setInterval(() => {
        setHats((prev) => {
          const newArr = [...prev];
          const [a, b] = [
            Math.floor(Math.random() * HAT_COUNT),
            Math.floor(Math.random() * HAT_COUNT),
          ];
          [newArr[a], newArr[b]] = [newArr[b], newArr[a]];
          return newArr;
        });
        i++;
        if (i >= SHUFFLE_TIMES) {
          clearInterval(interval);
          timeout = setTimeout(
            () => setIsShuffling(false),
            SHUFFLE_SPEED * 1000
          );
        }
      }, SHUFFLE_SPEED * 1000);
    }

    return () => clearTimeout(timeout);
  }, [isShuffling]);

  const handleStart = () => {
    playSound("defaultClick");
    setReveal(false);
    const newIndex = Math.floor(Math.random() * HAT_COUNT);
    setPumpkinIndex(newIndex);
    setShowStartHint(true);

    setTimeout(() => {
      setShowStartHint(false);
      setIsShuffling(true);
      setIsShufflingFinished(true);
      setIsItemNotCorrect(false);
      playSound("gameRunning");
    }, 1500);
  };

  const handlePick = (index: number) => {
    playSound("defaultClick");
    if (isShuffling) return;
    if (hats[index] === pumpkinIndex) {
      playSound("wonTurn");
      setReveal(true);
      setIsItemNotCorrect(false);
      setIsShufflingFinished(false);
      setTimeout(onComplete, 3000);
    } else {
      playSound("lostTurn");
      setReveal(true);
      setIsItemNotCorrect(true);
      setIsShufflingFinished(false);
    }
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div layout className="flex flex-col items-center gap-4 py-6">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <img
            src={Decoration}
            alt=""
            className="w-[75%] block mx-auto mb-6 opacity-50"
          />
          <h4 className="font-libre-bold text-2xl">Találd meg a tárgyat!</h4>

          <div
            ref={containerRef}
            className="relative w-full max-w-2xl h-36 bg-transparent overflow-visible flex justify-center items-center"
          >
            {hats.map((hatIndex, i) => {
              const hatWidth = 90;
              const totalWidth = (HAT_COUNT - 1) * hatWidth;
              const startX = (containerWidth - totalWidth) / 2 + 132;
              const isPumpkin = hatIndex === pumpkinIndex;

              return (
                <motion.div
                  key={hatIndex}
                  className="absolute bottom-6 w-20 h-20 flex items-center justify-center cursor-pointer"
                  animate={{
                    left: startX + i * hatWidth,
                  }}
                  transition={{ duration: SHUFFLE_SPEED, ease: "easeInOut" }}
                  onClick={() => {
                    isShufflingFinished
                      ? handlePick(i)
                      : console.log("Not ready yet.");
                  }}
                >
                  {isPumpkin && (showStartHint || reveal) && (
                    <motion.img
                      src={SkullImage}
                      alt="findTheItem"
                      className="absolute w-auto h-16 -bottom-2 z-20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <img
                    src={HatImage}
                    alt="Hat"
                    className={`w-20 h-auto z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] transition-all duration-500 ${
                      isShufflingFinished
                        ? "hover:-translate-y-4 hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
                        : "cursor-not-allowed hover:grayscale"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {reveal && !isItemNotCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              className="font-space-bold text-white bg-green-800 p-4 rounded-full"
            >
              Szép munka! Mehet is a táskába...
            </motion.div>
          )}

          {reveal && isItemNotCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
              className="font-space-bold text-white bg-red-700 p-4 rounded-full"
            >
              Ajjaj! Próbáljátok újra...
            </motion.div>
          )}

          {(showStartHint || isShuffling || isShufflingFinished) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <ShinyText
                text={
                  showStartHint
                    ? "Jegyezd meg a tárgy helyét..."
                    : isShuffling
                    ? "Keverés..."
                    : isShufflingFinished
                    ? "Na melyik volt?"
                    : ""
                }
                className="font-space-bold bg-tint"
              />
            </motion.div>
          )}

          {!showStartHint &&
            ((!reveal && !isShuffling) || isItemNotCorrect) && (
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                width="auto"
                height="auto"
                className="mt-2 font-libre-bold bg-paper text-tint border-2 border-tint py-4 px-6 rounded-full shadow hover:bg-tint hover:text-paper transition-all hover:-translate-y-2 disabled:opacity-50"
                handleClick={handleStart}
              >
                <span>Játék indítása</span>
              </GlareHover>
            )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemFinderGame;
