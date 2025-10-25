import { motion } from "framer-motion";
import PageHeadline from "../components/PageHeadline";
import { useBag } from "../hooks/useBag";
import ClueCard from "../components/ClueCard";
import Logo from "../assets/img/others/Logo.webp";

const BagPage = () => {
  const { bag } = useBag();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-12 justify-center items-center w-full"
    >
      <PageHeadline
        hl="Táska"
        p="Itt gyűlnek össze a nyomok, amiket a kúriában találtok. Tekintsétek meg együtt a nyomokat és próbáljatok meg felfedezni minél több összefüggést. Talán épp egy apró részlet vezet el a gyilkos kilétéhez?"
      />
      {bag.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 2, type: "spring", delay: 0.75 }}
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={Logo}
            alt="Murder Mystery Party 2025 logo"
            className="animate-float block w-full max-w-[250px]"
          />
          <p className="font-libre-bold text-4xl text-tint/50 animate-pulse">
            A táskád még üres...
          </p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bag.map((item) => (
            <ClueCard key={item.title} clue={item} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BagPage;
