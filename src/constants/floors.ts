import { clues } from "./clues";
import FirstFloor from "../assets/img/floors/FirstFloor.png";
import SecondFloor from "../assets/img/floors/SecondFloor.png";
import Attic from "../assets/img/floors/Attic.png";
import Basement from "../assets/img/floors/Basement.png";
import { fakeClues } from "./fakeClues";

export const floors = [
  {
    title: "Földszint",
    image: FirstFloor,
    clues: [
      { clue: clues[0], top: "65%", left: "80%" }, //véres kesztyű: étkező, asztal ✅
      { clue: clues[3], top: "35%", left: "25%" }, //szemtanúi állítás: konyha, asztalnál ülő szolgáló ✅
      { clue: clues[8], top: "45%", left: "20%" }, //kulcscsomó: konyha melletti gardrób szoba ✅
      { clue: clues[9], top: "24%", left: "68.5%" }, //távírószalag: nappali, könyves ✅
      { clue: clues[11], top: "72%", left: "50.75%" }, //lábnyomok: nagy szalon, bejárati ajtó ✅
      { clue: clues[14], top: "47%", left: "11%" }, //szokatlanul meleg bor: konyha, sütő ✅
      { clue: clues[15], top: "75%", left: "42%" }, //boros doboz: kápolna, oltár ✅
      { clue: clues[17], top: "35.5%", left: "70%" }, //régi szerelmes levél: szalon, kandalló ✅
      { clue: fakeClues[0], top: "60%", left: "15%" }, //üvegház 1 ✅
      { clue: fakeClues[1], top: "75%", left: "30%" }, //üvegház 2 ✅
      { clue: fakeClues[2], top: "54%", left: "84%" }, //jobb alsó étkező jobb szélső asztal ✅
    ],
  },
  {
    title: "Emelet",
    image: SecondFloor,
    clues: [
      { clue: clues[1], top: "70%", left: "42%" }, //könyvjelző: könyvtár, könyves polc ✅
      { clue: clues[2], top: "20%", left: "86%" }, //rejtett számlakönyv: démétrius szobája, íróasztal ✅
      { clue: clues[4], top: "38%", left: "28%" }, //francia nyelvű levél: Odelined szobája, sminkasztal ✅
      { clue: clues[5], top: "32%", left: "40%" }, //szolgálói vallomás: Matthieu szobája, ágy mellett ✅
      { clue: clues[7], top: "54%", left: "88%" }, //vérfoltos ruha: Norelda szobája, ajtó mellet ti ruhás szekrény ✅
      { clue: clues[10], top: "80%", left: "50%" }, //nyomozó: könyvtár, dolgozó asztal ✅
      { clue: clues[12], top: "45%", left: "19%" }, //adósságot igazoló számlák: emelet, baloldali gardrób ✅
      { clue: clues[13], top: "38%", left: "60%" }, //kutatási jegyzetek: jobb oldali vendégszoba, ágy ✅
      { clue: clues[19], top: "65%", left: "24%" }, //a titkos átjáró: Zélie szobája, ajtó melletti komód ✅
      { clue: clues[20], top: "61%", left: "70%" }, //a tőr és a gyűrű: Norelda szobájához közelebbi fürdő, toalett ✅
      { clue: fakeClues[3], top: "54%", left: "15%" }, //bal alsó szoba középen fent az asztalra ✅
      { clue: fakeClues[4], top: "20%", left: "12%" }, //bal fent szoba, bal fent sarok ablak melletti asztal ✅
      { clue: fakeClues[5], top: "62%", left: "54%" }, //könyvtár sakkasztal (jobbra az ajtó mellett) ✅
    ],
  },
  {
    title: "Padlás",
    image: Attic,
    clues: [
      { clue: clues[16], top: "78%", left: "40%" }, //lábnyomok a padláson: padlás, üres keretek ✅
      { clue: clues[18], top: "12%", left: "35%" }, //aktfestmény: padlás, szövőgép mellett ✅
      { clue: fakeClues[6], top: "60%", left: "20%" }, //bal oldalt a dobozokra ✅
      { clue: fakeClues[7], top: "20%", left: "78%" }, //jobb oldal fent lévő sarok --> festmény (ablak alatt) ✅
      { clue: fakeClues[8], top: "15%", left: "48%" }, //középen fent a szövőszéken ✅
    ],
  },
  {
    title: "Pince",
    image: Basement,
    clues: [
      { clue: clues[6], top: "78%", left: "73%" }, //vonatjegy: pince lépcső mögötti íróasztal ✅
      { clue: fakeClues[9], top: "35%", left: "6%" }, //bal felső sarok borosszekrény ✅
      { clue: fakeClues[10], top: "26%", left: "48%" }, //letakart zongora középen ✅
      { clue: fakeClues[11], top: "24%", left: "86%" }, //jobb felső sarok a lomok között ✅
    ],
  },
];
