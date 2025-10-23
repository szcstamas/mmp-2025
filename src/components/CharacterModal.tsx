import { motion } from "framer-motion";
import type { FC } from "react";

type CharacterModalProps = {
  onClose: () => void;
  name: string;
  title: string;
  description: string;
  image: string;
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.85, y: -40 },
};

const flash = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [1, 0],
    transition: { duration: 1, ease: "easeOut" },
  },
};

const CharacterModal: FC<CharacterModalProps> = ({
  onClose,
  name,
  title,
  description,
  image,
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-white z-10 pointer-events-none"
        variants={flash}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="bg-paper text-tint rounded-2xl p-8 shadow-2xl relative max-w-lg w-full flex flex-col justify-center items-start gap-4"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-tint  border-tint bg-paper text-xl flex justify-center items-center p-6 rounded-full border-2 w-8 h-8 transition-all hover:bg-tint hover:text-paper hover:border-paper"
        >
          ✖
        </button>

        <img
          src={image}
          alt={name}
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <h2 className="text-3xl font-semibold mt-3">{name}</h2>
        <p className="text-sm text-tint/60 tracking-widest uppercase">
          {title}
        </p>
        <p className="text-tint leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default CharacterModal;
