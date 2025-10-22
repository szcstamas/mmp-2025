import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingVideo from "../assets/videos/loadingscreen.mp4";
import { useSound } from "../hooks/useSound";
import Logo from "../assets/img/others/Logo.webp";
import GlareHover from "./GlareHover";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);
  const { playSound } = useSound();

  const LOADING_DURATION = 10000;
  const STEP = 2;
  const INTERVAL = LOADING_DURATION / (100 / STEP);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onFinish();
          }, 800);
          return 100;
        }
        return prev + STEP;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [started, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[url('/img/loading-bg.jpg')] bg-cover bg-center text-paper">
          <video
            src={LoadingVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <AnimatePresence mode="popLayout">
            <motion.div className="flex flex-col items-center" layout>
              <motion.img
                src={Logo}
                alt="Logo"
                className="animate-float max-w-[250px] w-full z-10 block mb-4"
                layout
              />

              {!started ? (
                <motion.div
                  key="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    width="auto"
                    height="auto"
                    className="relative z-10 px-10 py-5 bg-paper text-tint font-libre-bold text-xl rounded-full border-4 border-paper hover:bg-tint hover:text-paper hover:!-translate-y-2 transition-all shadow-2xl"
                    handleClick={() => {
                      playSound("defaultClick");
                      setStarted(true);
                      setTimeout(() => {
                        playSound("doorOpenCloses", { volume: 0.65 });
                      }, 500);
                      setTimeout(() => {
                        playSound("femaleThroatClearing", { volume: 1 });
                      }, 8000);
                    }}
                  >
                    <span>Kezdjük!</span>
                  </GlareHover>
                </motion.div>
              ) : (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center gap-6"
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-paper border-t-transparent rounded-full animate-spin"
                    transition={{ repeat: Infinity, ease: "linear" }}
                  />

                  <motion.span
                    className="text-3xl font-bold text-paper font-libre-bold"
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    {progress}%
                  </motion.span>

                  <div className="w-64 h-2 bg-paper/30 rounded-full overflow-hidden border-2 border-paper">
                    <motion.div
                      className="h-full bg-paper"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeInOut", duration: 0.3 }}
                    />
                  </div>

                  <p className="text-paper/80 text-sm tracking-wider mt-4">
                    Betöltés folyamatban...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
