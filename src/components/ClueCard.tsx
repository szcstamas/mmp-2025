import { useBag } from "../hooks/useBag";
import type { Clue } from "../types/Clue";

type ClueCardProps = {
  clue: Clue;
};

const ClueCard: React.FC<ClueCardProps> = ({ clue }) => {
  const { title, description, location } = clue;
  const { removeItem } = useBag();

  return (
    <div
      key={title}
      className="bg-tint p-8 rounded-2xl shadow-lg text-paper max-w-sm"
    >
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-sm opacity-80 mb-2">{description}</p>
      <div className="flex flex-col justify-center items-start gap-1 my-4">
        <p className="text-sm text-gray-200 opacity-80">Itt találtátok:</p>
        <p className="text-base text-white uppercase font-bold tracking-widest">
          {location}
        </p>
      </div>

      <button
        onClick={() => removeItem(title)}
        className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg transition"
      >
        Törlés
      </button>
    </div>
  );
};

export default ClueCard;
