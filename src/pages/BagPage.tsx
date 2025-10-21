import { motion } from "framer-motion";
import PageHeadline from "../components/PageHeadline";
import { useBag } from "../hooks/useBag";
import ClueCard from "../components/ClueCard";

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
        <p>A táskád még üres...</p>
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
