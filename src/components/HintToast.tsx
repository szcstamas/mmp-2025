import { motion, AnimatePresence } from "framer-motion";
import Decoration from "../assets/img/others/Decoration.webp";

type HintToastProps = {
  message: string;
  visible: boolean;
};

const HintToast: React.FC<HintToastProps> = ({ message, visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed bottom-20 text-tint bg-paper px-6 py-4 shadow-[0_20px_20px_rgba(0,0,0,0.25)] text-lg z-[100] border-2 border-tint flex flex-col justify-center items-center gap-4"
      >
        <p className="font-libre-regular uppercase text-sm text-center tracking-widest">
          Információ
        </p>
        <img
          src={Decoration}
          alt=""
          className="w-full max-w-[300px] block opacity-50"
        />
        <p className="font-space-regular pb-4 max-w-[250px] w-full mx-auto text-center leading-normal">
          {message}
        </p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default HintToast;
