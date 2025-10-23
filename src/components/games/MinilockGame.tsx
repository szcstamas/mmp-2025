import { useState } from "react";

type MiniLockGameProps = {
  onComplete: () => void;
  code?: string;
};

const MiniLockGame: React.FC<MiniLockGameProps> = ({
  onComplete,
  code = "347",
}) => {
  const [input, setInput] = useState(["", "", ""]);
  const [attempted, setAttempted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

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
      setUnlocked(true);
      setTimeout(() => onComplete(), 800);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-sm opacity-80 max-w-xs">
        A lakat 3 számjegyű kóddal záródik. Próbáld kinyitni!
      </p>

      <div className="flex gap-3">
        {input.map((val, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-12 text-center text-2xl font-libre-bold border-2 border-tint rounded-lg focus:outline-none focus:ring-2 focus:ring-tint bg-paper text-tint"
          />
        ))}
      </div>

      <button
        onClick={checkCode}
        className="mt-2 px-4 py-2 bg-tint text-paper rounded-lg border-2 border-tint hover:bg-paper hover:text-tint transition-all"
      >
        Kinyitom a lakatot 🔓
      </button>

      {attempted && !unlocked && (
        <p className="text-red-500 text-sm mt-1">
          Ez nem nyílt ki... próbáld újra!
        </p>
      )}
      {unlocked && <p className="text-green-500 text-sm mt-1">Sikerült! 🎉</p>}
    </div>
  );
};

export default MiniLockGame;
