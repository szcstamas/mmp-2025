import React from "react";
import { motion } from "framer-motion";
import { characterImages } from "../constants/CharacterImages";

const CharactersPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      CharacterPage
      <div className="grid grid-cols-4 w-full gap-8">
        {characterImages.map((char, index) => {
          return (
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: index,
              }}
              src={char}
              className="rounded-2xl shadow-2xl max-w-[450px] w-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharactersPage;
