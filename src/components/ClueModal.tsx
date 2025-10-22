import { useSound } from "../hooks/useSound";
import type { Clue } from "../types/Clue";

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
    <div
      key={title}
      className="relative bg-paper p-6 rounded-2xl shadow-lg text-tint max-w-md"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-sm opacity-80 mb-2">{description}</p>
          <p className="text-xs text-gray-600 italic mb-4">
            Helyszín: {location}
          </p>
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
          Ezt már megtaláltad! ✅
        </button>
      ) : (
        <button
          onClick={() => {
            playSound("storeItem");
            addItem(clue);
          }}
          className="w-full bg-green-700 text-white py-2 rounded-lg transition"
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
    </div>
  );
};

export default ClueModal;
