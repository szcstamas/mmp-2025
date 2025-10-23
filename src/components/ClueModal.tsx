import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "../hooks/useSound";
import type { Clue } from "../types/Clue";
import MiniLockGame from "./games/MinilockGame";
import PumpkinFinderGame from "./games/ItemFinderGame";
import SpotlightGame from "./games/SpotlightGame";

type ClueModalProps = {
  clue: Clue;
  found: boolean;
  onClose: () => void;
  addItem: (item: Clue) => void;
};

const ClueModal: React.FC<ClueModalProps> = ({
  clue,
  found,
  addItem,
  onClose,
}) => {
  const { title, description, location, image } = clue;
  const { playSound } = useSound();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        key={title}
        className="relative bg-paper p-6 rounded-2xl shadow-lg text-tint max-w-lg"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-sm opacity-80 mb-2">{description}</p>
            <div className="flex flex-col justify-center items-start gap-1 my-4">
              <p className="text-sm text-tint/80 opacity-80">Helyszín:</p>
              <p className="text-base text-tint uppercase font-bold tracking-widest">
                {location}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={image}
              alt=""
              className="rounded-lg shadow-2xl border-2 border-tint"
            />
          </div>
        </div>

        {found ? (
          <button
            disabled
            className="w-full bg-paper text-tint border-2 border-tint py-2 rounded-lg cursor-not-allowed"
          >
            {" "}
            Ezt már megtaláltad! ✅{" "}
          </button>
        ) : clue.requiresMiniGame ? (
          clue.requiresMiniGame === "lock" ? (
            <MiniLockGame
              onComplete={() => {
                playSound("storeItem");
                addItem(clue);
              }}
            />
          ) : clue.requiresMiniGame === "spotlight" ? (
            <SpotlightGame
              image={clue.image}
              onComplete={() => {
                playSound("storeItem");
                addItem(clue);
              }}
            />
          ) : clue.requiresMiniGame === "pumpkin" ? (
            <PumpkinFinderGame
              onComplete={() => {
                playSound("storeItem");
                addItem(clue);
              }}
            />
          ) : null
        ) : (
          <button
            className="w-full bg-green-700 text-white py-2 rounded-lg transition"
            onClick={() => {
              playSound("storeItem");
              addItem(clue);
            }}
          >
            Hozzáadom a táskához! 🔎
          </button>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-tint border-tint bg-paper text-xl flex justify-center items-center p-6 rounded-full border-2 w-8 h-8 transition-all hover:bg-tint hover:text-paper"
        >
          ✖
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClueModal;
