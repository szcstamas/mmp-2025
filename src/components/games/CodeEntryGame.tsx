import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/img/others/Logo.webp";
import { useSound } from "../../hooks/useSound";

type CodeEntryGameProps = {
  codeTitle: string;
  hintText: string;
  correctCode: string;
  onComplete: () => void;
};

const CodeEntryGame: React.FC<CodeEntryGameProps> = ({
  codeTitle,
  hintText,
  correctCode,
  onComplete,
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { playSound } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === correctCode.toLowerCase()) {
      playSound("wonTurn");
      setSuccess(true);
      setError(false);
      setTimeout(() => onComplete(), 3000);
    } else {
      playSound("lostTurn");
      setError(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 text-center w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={Logo}
        alt="Murder Mystery Party 2025 logo"
        className="block w-full max-w-[140px] opacity-50"
      />
      <h3 className="text-xl font-bold text-tint max-w-[150px] w-full">
        {codeTitle}
      </h3>
      <p className="text-lg text-tint/60 mb-4 italic">{hintText}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Írd be a kódot..."
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

      {success && (
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

export default CodeEntryGame;
