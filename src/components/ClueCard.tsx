import type { Clue } from "../types/Clue";

type ClueCardProps = {
  clue: Clue;
  found: boolean;
  onClose: () => void;
  addItem: (item: Clue) => void;
};

const ClueCard: React.FC<ClueCardProps> = ({
  clue,
  found,
  addItem,
  onClose,
}) => {
  const { title, description, location } = clue;

  return (
    <div
      key={title}
      className="relative bg-paper p-6 rounded-2xl shadow-lg text-tint max-w-sm"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm opacity-80 mb-2">{description}</p>
      <p className="text-xs text-gray-600 italic mb-4">Helyszín: {location}</p>
      {found ? (
        <button
          disabled
          className="w-full bg-green-700 text-white py-2 rounded-lg cursor-not-allowed"
        >
          Ezt már megtaláltad! ✅
        </button>
      ) : (
        <button
          onClick={() => addItem(clue)}
          className="w-full text-white bg-tint/80 hover:bg-tint py-2 rounded-lg transition"
        >
          Hozzáadom a táskához! 🔎
        </button>
      )}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-tint  border-tint bg-paper text-xl flex justify-center items-center p-6 rounded-full border-2 w-8 h-8 transition-all hover:bg-tint hover:text-paper"
      >
        ✖
      </button>
    </div>
  );
};

export default ClueCard;
