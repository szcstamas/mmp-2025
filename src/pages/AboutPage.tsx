import { motion } from "framer-motion";
import PageHeadline from "../components/PageHeadline";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-12 justify-center items-center w-full"
    >
      <PageHeadline
        hl="A játék célja"
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          similique fuga accusamus? Tempore numquam itaque quod iusto quibusdam
          repudiandae obcaecati."
      />
      <p>A szabályzatról.</p>
    </motion.div>
  );
};

export default AboutPage;
