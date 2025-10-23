//routes
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BagPage from "./pages/BagPage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import { useSound } from "./hooks/useSound";

export default function App() {
  const [loaded, setLoaded] = useState(true);
  const { playSound } = useSound();

  // const handleLoadingFinished = () => {
  //   setLoaded(true);
  //   setTimeout(() => {
  //     playSound("fullGameMusicLoop", { loop: true, volume: 0.5 });
  //   }, 2000);
  // };

  return (
    <>
      {/* {!loaded && <LoadingScreen onFinish={handleLoadingFinished} />} */}
      {loaded && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      )}
    </>
  );
}
