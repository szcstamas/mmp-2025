import React from "react";
import TextType from "./TextType";
import { motion } from "framer-motion";

type PageHeadlineProps = {
  hl: string;
  p: string;
};

const PageHeadline: React.FC<PageHeadlineProps> = ({ hl, p }) => {
  return (
    <div className="max-w-[750px] w-full mx-auto flex flex-col justify-center items-center gap-8 text-center">
      <TextType
        as={"h1"}
        text={hl}
        className="text-4xl text-tint"
        typingSpeed={200}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", delay: 0.25, duration: 2 }}
      >
        {p}
      </motion.p>
    </div>
  );
};

export default PageHeadline;
