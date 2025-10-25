import { useState } from "react";
import { motion } from "framer-motion";
import { useSound } from "../../hooks/useSound";
import ShinyText from "../ShinyText";
import Logo from "../../assets/img/others/Logo.webp";

type AnagramGameProps = {
  word: string;
  anagram: string;
  onComplete: () => void;
};

const AnagramGame: React.FC<AnagramGameProps> = ({
  word,
  anagram,
  onComplete,
}) => {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(false);
  const { playSound } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === word.toLowerCase()) {
      playSound("wonTurn");
      setIsCorrect(true);
      setError(false);
      setTimeout(() => onComplete(), 3000);
    } else {
      playSound("lostTurn");
      setError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center gap-6 w-full"
    >
      <img
        src={Logo}
        alt="Murder Mystery Party 2025 logo"
        className="block w-full max-w-[140px] opacity-50"
      />
      <h3 className="text-xl font-bold text-tint max-w-[150px] w-full">
        Fejtsd meg az anagrammát!
      </h3>

      <motion.div className="p-6 bg-tint w-full rounded-lg">
        <ShinyText
          text={anagram.toUpperCase()}
          disabled={false}
          speed={3}
          className="text-4xl font-libre-bold"
        />
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Írd ide a megoldást..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="font-space-regular w-full border-2 border-tint/20 transition-all rounded-lg px-4 py-2 text-center text-lg text-tint focus:outline-none focus:border-tint/50 focus:shadow-2xl"
        />
        <button
          type="submit"
          className="z-10 px-10 py-5 bg-tint text-paper font-libre-bold text-xl rounded-full border-4 border-paper hover:bg-paper hover:text-tint hover:border-tint transition-all shadow-2xl"
        >
          Lássuk!
        </button>
      </form>

      {isCorrect && (
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
      {error && (
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
    </motion.div>
  );
};

export default AnagramGame;
