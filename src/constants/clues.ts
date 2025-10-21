import Feather from "../assets/img/clues/Feather.png";
import Hammer from "../assets/img/clues/Hammer.png";
import Letter from "../assets/img/clues/Letter.png";

export const clues = [
  {
    title: "Fehér toll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit atque aperiam veniam commodi cupiditate in laborum maxime exipsa!",
    location: "Étkező",
    image: Feather,
  },
  {
    title: "Üzbég levél",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit atque aperiam veniam commodi cupiditate in laborum maxime exipsa!",
    location: "Dolgozószoba",
    image: Letter,
    requires: "Fehér toll",
  },
  {
    title: "Kalapács",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit atque aperiam veniam commodi cupiditate in laborum maxime exipsa!",
    location: "Műhely",
    image: Hammer,
    requires: "Üzbég levél",
  },
];
