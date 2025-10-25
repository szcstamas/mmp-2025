import { useState } from "react";
import Logo from "../../assets/img/others/Logo.webp";
import { useSound } from "../../hooks/useSound";
import { motion } from "framer-motion";

type MiniLockGameProps = {
  onComplete: () => void;
  code?: string;
};

const MiniLockGame: React.FC<MiniLockGameProps> = ({
  onComplete,
  code = "1923",
}) => {
  const [input, setInput] = useState(["", "", "", ""]);
  const [attempted, setAttempted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const { playSound } = useSound();

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...input];
    updated[index] = value;
    setInput(updated);
  };

  const checkCode = () => {
    const guess = input.join("");
    setAttempted(true);
    if (guess === code) {
      playSound("wonTurn");
      setUnlocked(true);
      setTimeout(() => onComplete(), 3000);
    } else {
      playSound("lostTurn");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <img
        src={Logo}
        alt="Murder Mystery Party 2025 logo"
        className="block w-full max-w-[140px] opacity-50"
      />
      <h3 className="text-xl font-bold text-tint max-w-[150px] w-full">
        Kódfejtő
      </h3>
      <p className="text-lg text-tint/60 mb-4 italic">
        A gróf életének leggyászosabb napja...
      </p>

      <div className="flex gap-4">
        {input.map((val, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-16 h-12 font-libre-bold border-2 border-tint/20 transition-all rounded-lg px-4 py-2 text-center text-2xl text-tint focus:outline-none focus:border-tint/50 focus:shadow-2xl"
          />
        ))}
      </div>

      <button
        onClick={checkCode}
        className="z-10 px-10 py-5 bg-tint text-paper font-libre-bold text-xl rounded-full border-4 border-paper hover:bg-paper hover:text-tint hover:border-tint transition-all shadow-2xl"
      >
        Lássuk!
      </button>

      {attempted && !unlocked && (
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
      {unlocked && (
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
    </div>
  );
};

export default MiniLockGame;
