import { motion } from "framer-motion";
import FloorSlider from "../components/FloorSlider";
import PageHeadline from "../components/PageHeadline";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-12 justify-center items-center w-full"
    >
      <PageHeadline
        hl="Kúria"
        p="Fedezd fel a sötét titkokat rejtő nemesi kúriát! Barangolj az épület szintjein, kutass elrejtett nyomok után, és találd meg azokat a részleteket, amelyek segíthetnek leleplezni Spiczfalvy gróf gyilkosát. Minden ajtó mögött újabb titok vár."
      />
      <FloorSlider />
    </motion.div>
  );
};

export default HomePage;
