import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "../hooks/useSound";
import type { Clue } from "../types/Clue";
import MiniLockGame from "./games/MinilockGame";
import PumpkinFinderGame from "./games/ItemFinderGame";
import SpotlightGame from "./games/SpotlightGame";
import { useState } from "react";
import AnagramGame from "./games/AnagramGame";
import CodeEntryGame from "./games/CodeEntryGame";
import { codeHints } from "../constants/codeHints";

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
  const [gameCompleted, setGameCompleted] = useState(false);

  const showInfo = found || !clue.requiresMiniGame || gameCompleted;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        key={title}
        className={`relative flex flex-col justify-center items-start gap-6 bg-paper p-8 rounded-2xl shadow-lg text-tint ${
          clue.requiresMiniGame === "spotlight" && !found ? "" : "max-w-2xl"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-tint border-tint bg-paper text-xl flex justify-center items-center p-6 rounded-full border-2 w-8 h-8 transition-all hover:bg-tint hover:text-paper z-20"
        >
          ✖
        </button>

        {showInfo ? (
          <>
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
                Ezt a nyom már a táskában van!
              </button>
            ) : (
              <button
                className="w-full bg-green-700 text-white py-2 rounded-lg transition-all duration-500 hover:bg-green-900"
                onClick={() => {
                  playSound("storeItem");
                  addItem(clue);
                }}
              >
                Nyom hozzáadása a táskához
              </button>
            )}
          </>
        ) : (
          <>
            {clue.requiresMiniGame === "code" && (
              <CodeEntryGame
                codeTitle={codeHints[clue.title]?.codeTitle || clue.title}
                hintText={
                  codeHints[clue.title]?.hintText ||
                  "Keresd a helyszínen a cetlit a kóddal!"
                }
                correctCode={codeHints[clue.title]?.correctCode || ""}
                onComplete={() => {
                  playSound("storeItem");
                  setGameCompleted(true);
                  addItem(clue);
                }}
              />
            )}
            {clue.requiresMiniGame === "anagram" && (
              <AnagramGame
                word={
                  clue.title === "Szemtanúi állítás"
                    ? "igazság"
                    : clue.title === "Rejtett számlakönyv"
                    ? "illegális"
                    : clue.title === "Távírószalag"
                    ? "morze"
                    : clue.title === "Kutatási jegyzetek"
                    ? "tüdőbaj"
                    : clue.title === "Régi szerelmes levél"
                    ? "kedvesem"
                    : "titok"
                }
                anagram={
                  clue.title === "Szemtanúi állítás"
                    ? "ÁGASZIG"
                    : clue.title === "Rejtett számlakönyv"
                    ? "GÁLILIESL"
                    : clue.title === "Távírószalag"
                    ? "OMZRE"
                    : clue.title === "Kutatási jegyzetek"
                    ? "DJÜTBŐA"
                    : clue.title === "Régi szerelmes levél"
                    ? "SKDEEEVM"
                    : "TIKOT"
                }
                onComplete={() => {
                  playSound("storeItem");
                  setGameCompleted(true);
                  addItem(clue);
                }}
              />
            )}
            {clue.requiresMiniGame === "lock" && (
              <MiniLockGame
                onComplete={() => {
                  playSound("storeItem");
                  setGameCompleted(true);
                  addItem(clue);
                }}
              />
            )}
            {clue.requiresMiniGame === "spotlight" && (
              <SpotlightGame
                image={clue.image}
                onComplete={() => {
                  playSound("storeItem");
                  setGameCompleted(true);
                  addItem(clue);
                }}
              />
            )}
            {clue.requiresMiniGame === "findTheItem" && (
              <PumpkinFinderGame
                onComplete={() => {
                  playSound("storeItem");
                  setGameCompleted(true);
                  addItem(clue);
                }}
              />
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ClueModal;
