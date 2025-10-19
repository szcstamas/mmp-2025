//routes
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BagPage from "./pages/BagPage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  );
}
