import { clues } from "./clues";
import FirstFloor from "../assets/img/floors/FirstFloor.png";
import SecondFloor from "../assets/img/floors/SecondFloor.png";
import Attic from "../assets/img/floors/Attic.png";
import Basement from "../assets/img/floors/Basement.png";

export const floors = [
  {
    title: "Földszint",
    image: FirstFloor,
    clues: [
      { clue: clues[0], top: "10%", left: "15%" },
      { clue: clues[1], top: "40%", left: "60%" },
      { clue: clues[2], top: "70%", left: "30%" },
    ],
  },
  {
    title: "Emelet",
    image: SecondFloor,
    clues: [
      { clue: clues[0], top: "20%", left: "50%" },
      { clue: clues[1], top: "60%", left: "70%" },
    ],
  },
  {
    title: "Tetőtér",
    image: Attic,
    clues: [{ clue: clues[2], top: "30%", left: "20%" }],
  },
  {
    title: "Pince",
    image: Basement,
    clues: [{ clue: clues[2], top: "30%", left: "20%" }],
  },
];
