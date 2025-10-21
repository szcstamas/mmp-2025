import { useState } from "react";
import type { Clue } from "../types/Clue";
import ImageModal from "./ImageModal";
import { AnimatePresence, motion } from "framer-motion";

type ClueCardProps = {
  clue: Clue;
};

const ClueCard: React.FC<ClueCardProps> = ({ clue }) => {
  const { title, description, location, image } = clue;
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={title}
      className="bg-tint p-8 rounded-2xl shadow-lg text-paper max-w-sm flex flex-col justify-between items-start"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-sm opacity-80 mb-2">{description}</p>
          <div className="flex flex-col justify-center items-start gap-1 my-4">
            <p className="text-sm text-gray-200 opacity-80">Itt találtátok:</p>
            <p className="text-base text-white uppercase font-bold tracking-widest">
              {location}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt=""
            className="rounded-lg shadow-2xl border-2 border-page"
          />
        </div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="w-full text-tint bg-paper hover:bg-paper/80 py-2 rounded-lg transition"
      >
        Nyom megtekintése
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageModal image={image} onClose={() => setShowModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClueCard;
