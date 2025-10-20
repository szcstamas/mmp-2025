import { motion } from "framer-motion";
import PageHeadline from "../components/PageHeadline";
import { useBag } from "../hooks/useBag";

const BagPage = () => {
  const { bag, removeItem } = useBag();

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
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          similique fuga accusamus? Tempore numquam itaque quod iusto quibusdam
          repudiandae obcaecati."
      />
      {bag.length === 0 ? (
        <p>A táskád még üres...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bag.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg text-white max-w-sm"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm opacity-80 mb-2">{item.description}</p>
              <p className="text-xs text-gray-400 italic mb-4">
                Helyszín: {item.location}
              </p>

              <button
                onClick={() => removeItem(item.title)}
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition"
              >
                Törlés ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BagPage;
