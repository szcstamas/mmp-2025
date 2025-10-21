import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { characters } from "../constants/characters";
import PageHeadline from "../components/PageHeadline";
import CharacterModal from "../components/CharacterModal";

const CharactersPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const handleClose = () => setSelected(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-12 justify-center items-center w-full"
    >
      <PageHeadline
        hl="Szereplők"
        p="Ismerd meg a kúria vendégeit és személyzetét – mindegyiküknek megvan a maga múltja, motivációja és titka. Figyeld meg a viselkedésüket, mert bárki gyanússá válhat a játék során. Egyikük azonban többet rejteget, mint a többiek…"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 p-4">
        {characters.map((char, index) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="cursor-pointer group relative"
            onClick={() => setSelected(index)}
          >
            <img
              src={char.image}
              alt={char.name}
              className="rounded-2xl shadow-2xl w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:sepia group-hover:rounded-none"
            />
            <div className="font-libre-bold absolute bottom-6 left-1/2 -translate-x-1/2 bg-[url(/img/footer-bg.jpg)] bg-cover bg-paper text-tint p-4 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center text-xl font-semibold">
              {char.name}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <CharacterModal
            key="character-modal"
            onClose={handleClose}
            name={characters[selected].name}
            description={characters[selected].description}
            image={characters[selected].image}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CharactersPage;
