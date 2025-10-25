import { useRef, useState, useEffect } from "react";

type SpotlightGameProps = {
  image: string;
  onComplete: () => void;
};

const SpotlightGame: React.FC<SpotlightGameProps> = ({ image, onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [found, setFound] = useState(false);

  //random spot
  const [target] = useState({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleClick = () => {
    const dx = Math.abs(mousePos.x - target.x);
    const dy = Math.abs(mousePos.y - target.y);
    if (dx < 5 && dy < 5) {
      setFound(true);
      setTimeout(() => onComplete(), 800);
    }
  };

  const distance = Math.sqrt(
    Math.pow(mousePos.x - target.x, 2) + Math.pow(mousePos.y - target.y, 2)
  );
  const intensity = Math.max(0, 1 - distance / 50);

  const spotlightSize = 80 + intensity * 100;
  const spotlightBrightness = 0.15 + intensity * 0.5;

  useEffect(() => {
    if (found) {
      // ide jöhet hang, animáció stb.
    }
  }, [found]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative w-[60rem] h-[40rem] overflow-hidden rounded-lg border-2 border-tint cursor-crosshair select-none"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-75"
        style={{
          background: `radial-gradient(
            circle ${spotlightSize}px at ${mousePos.x}% ${mousePos.y}%,
            rgba(255,255,255,${spotlightBrightness}) 0%,
            rgba(0,0,0,0.9) 80%
          )`,
        }}
      />

      {found && (
        <div className="absolute inset-0 flex items-center justify-center text-green-400 text-2xl font-bold bg-black/60 backdrop-blur-sm">
          ✅ Megtaláltad!
        </div>
      )}
    </div>
  );
};

export default SpotlightGame;
