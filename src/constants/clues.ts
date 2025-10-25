import MuddySteps from "../assets/img/clues/B-1.jpg";
import BiologicalBag from "../assets/img/clues/B-2.jpg";
import BiologicalNotes from "../assets/img/clues/B-3.jpg";
import BloodyGlove from "../assets/img/clues/D-1.jpg";
import HiddenShelf from "../assets/img/clues/D-3.jpg";
import RedCircledBook from "../assets/img/clues/DO-2.jpg";
import FoundKeys from "../assets/img/clues/E-1.jpg";
import MessagingMachine from "../assets/img/clues/E-2.jpg";
import HiddenLetters from "../assets/img/clues/E-3.jpg";
import FatChef from "../assets/img/clues/M-1.jpg";
import StatueInChest from "../assets/img/clues/M-2.jpg";
import FootstepsWithFrame from "../assets/img/clues/M-3.jpg";
import MaidenSweeping from "../assets/img/clues/N-1.jpg";
import TrainTicket from "../assets/img/clues/N-2.jpg";
import BloodyWomanTop from "../assets/img/clues/N-3.jpg";
import WomanChef from "../assets/img/clues/O-1.jpg";
import JewelleryTable from "../assets/img/clues/O-3.jpg";
import BurntLetter from "../assets/img/clues/Z-1.jpg";
import NudePainting from "../assets/img/clues/Z-2.jpg";
import HiddenDoor from "../assets/img/clues/Z-3.jpg";
import KnifeAndRing from "../assets/img/clues/Z-4.jpg";

export const clues = [
  {
    title: "Egy vérfoltos kesztyű",
    description:
      "Egy lovász kesztyű, a ujjánál hímzett S.D. monogrammal, melyet az étkező padlóján találnak meg az asztal közelében. A szövet megszáradt vérrel van borítva. Démétrius azt állítja, az istállóban vágta meg a kezét, amikor megpróbált megfékezni egy megvadult lovat. ",
    location: "Étkező",
    image: BloodyGlove,
    requiresMiniGame: "findTheItem",
  },
  {
    title: "A „könyvjelző”",
    description:
      "A könyvtár egyik könyvében apró, gondosan bekarikázott és aláhúzott betűk rejtőznek. Első pillantásra teljesen véletlenszerűnek tűnnek, ám aki figyelmesen vizsgálja az oldalakat, felfedezheti, hogy a betűk egymás után szavakat formálnak. Ezek a titkos üzenetek Odeline és Démétrius titkos találkozóhelyeit jelzik, minden üzenet oldalának sarkán apró jelzéssel – a fiatalok diszkrét „szignójával” – van ellátva.",
    location: "Könyvtár",
    image: RedCircledBook,
    requires: ["Egy vérfoltos kesztyű", "Szemtanúi állítás"],
    requiresMiniGame: "spotlight",
  },
  {
    title: "Rejtett számlakönyv",
    description:
      "Egy vékony, bőrbe kötött jegyzetfüzet kerül elő Démétrius íróasztalának titkos fiókjából. A lapok tele vannak számokkal, rövid kifejezésekkel és betűjelzésekkel — mintha valamiféle kód vagy elszámolás lenne. A bejegyzések között gyakran ismétlődnek a következő szavak: fizetve, Clermont, Marceau, Fournier, dátumok és melletük különös jelek (pl. „V–12 / M.7”). Aki belelapoz, nem azonnal érti, mit jelentenek az adatok, de valamilyen illegális üzletnek tűnik, amelyről a család nem tudhatott.",
    location: "Démétrius szobája",
    image: HiddenShelf,
    requires: "A „könyvjelző”",
  },
  {
    title: "Szemtanúi állítás",
    description:
      "Egy szolgáló azt látta, hogy Odeline és a Gróf rövid, feszültséggel teli párbeszédet folytattak a madárházban a gyilkosságot megelőző napon. A részleteket a szolgáló nem tudta, de azt tisztán hallotta, hogy a gróf azt mondta a grófnőnek, hogy „rosszul jársz, ha megint hátba szúrsz madárkám”.",
    location: "Konyha",
    image: WomanChef,
  },
  {
    title: "Francia nyelvű levél",
    description:
      "Odeline levelet kapott egyik bátyjától. A sorok között rejtett, keserű igazság tárul fel: a La Roche család anyagi csődjéért valószínűleg az Öreg Gróf üzleti manőverei felelősek.",
    location: "Odeline szobája",
    image: JewelleryTable,
    requires: "A „könyvjelző”",
  },
  {
    title: "Szolgálói vallomás",
    description:
      "Az egyik szolgáló, azt állítja, a hét elején hallotta, amint Norelda és a férje telefonon keresztül veszekedett valamilyen „tartozásokról” és „pénzről, ami majd jön”.",
    location: "Matthieu szobája",
    image: MaidenSweeping,
  },
  {
    title: "Vonatjegy és térkép Franciaország felé",
    description:
      "A pincében egy régi íróasztal fiókjában egy, a következő hétre szóló vonatjegy Párizsba, valamint egy térkép található, amelyen kézzel van jelölve az útvonal a La Roche-birtokhoz. A térképen lévő kézírás tagadhatatlanul Noreldáé.",
    location: "Pince",
    image: TrainTicket,
    requires: "Szolgálói vallomás",
  },
  {
    title: "Vérfoltos ruha",
    description:
      "Norelda hálószobájának szekrényében egy selyemblúz található, amelynek ujján száradt vérfoltok láthatók. A nő azt állítja, a vérfoltok nem a Grófhoz köthetők — férjével dulakodott pár nappal korábban, és a férfi részegen rátámadt, azért véres a ruha ujja.",
    location: "Norelda szobája",
    image: BloodyWomanTop,
    requires: "Vonatjegy és térkép Franciaország felé",
  },
  {
    title: "Kulcscsomó",
    description:
      "A könyvtár kulcsának másolatát Edgar kabátjának zsebében találták. Állítása szerint a kulcsot a bátyja engedélyével tartotta magánál, de a körülmények így is terhelőnek tűnnek a többiek szemében.",
    location: "Konyha melletti gardrób",
    image: FoundKeys,
  },
  {
    title: "Távírószalag",
    description:
      "Valóban van egy üzenet, Edgar feleségének, a szalag el van szakítva, és a letépet, darab a távírógép alá van csúszatva, amely így kezdődik: „A pénz legyen meg hétfőre, nincs több halogatási időd. – S.S.”",
    location: "Nappali",
    image: MessagingMachine,
    requires: "Kulcscsomó",
  },
  {
    title: "Nyomozó",
    description:
      "A gróf dolgozóasztalának zárható fiókjában egy boríték lapul benne egy jelentés Edgaról, úgy fest a Grófnak feltűnt öccse feszült viselkedése az elmúlt hetek során, ezért magánnyomozót fogadott megfigyelésére. A jelentésekből kiderült, hogy Edgar kapcsolatban állt egy titkos politikai mozgalommal; amit a nyomozó fényképekkel támasztott alá.",
    location: "Könyvtár",
    image: HiddenLetters,
    requires: "Távírószalag",
  },
  {
    title: "Lábnyomok",
    description:
      "Friss, sáros férfilábnyomok a bejárati ajtó környékén, a méret és a mintázat Brunován csizmájához hasonló. De lehet, hogy Démétriusé – senki sem biztos benne.",
    location: "Nagy szalon",
    image: MuddySteps,
  },
  {
    title: "Adósságokat igazoló számlák",
    description:
      "Brunován orvosi kufferében számos magán életi és gyógyszerlaborból származó számla található. A dokumentumok egyértelműen mutatják: hatalmas összegeket költött messze többet, mint amit engedhetne magának.",
    location: "Bal szélső gardrób az emeleten",
    image: BiologicalBag,
  },
  {
    title: "Kutatási jegyzetek",
    description:
      "A párnája alatt egy jegyzetfüzet, benne leírás a titkos kísérletek részleteivel kapcsolatban. A margón egy kétségbeesett megjegyzés: „már csak néhány teszt hiányzik – ha le kell állnom, abba anyám bele is halhat.”",
    location: "Jobb oldali vendégszoba",
    image: BiologicalNotes,
    requires: "Adósságokat igazoló számlák",
  },
  {
    title: "Szokatlanul meleg bor",
    description:
      "A szakács észrevette, hogy a pincéből „frissen felhozott” bor meglepően meleg volt, az üvegen nem ült meg a pára. Azt is megjegyezte, hogy Matthieu reverendájának ujja poros és pókhálós volt.",
    location: "Konyha",
    image: FatChef,
  },
  {
    title: "Boros doboz",
    description:
      "A kápolna oltára mögött egy fából készült boros dobozt találtak, benne egy kis imádkozó pap-szoborral és egy félig leéget gyertyával. A hely szokatlannak tűnik — mintha valaki sietve próbált volna elrejteni, de miért?",
    location: "Kápolna",
    image: StatueInChest,
    requires: "Szokatlanul meleg bor",
  },
  {
    title: "Férfi lábnyomok a padláson",
    description:
      "A padlás vastag porában férfilábnyomok rajzolódnak ki, egészen egy üres festménykeretig vezetve. A keretből valaki kivágta a képet — mintha fontos bizonyítékot próbált volna megsemmisíteni.",
    location: "Padlás",
    image: FootstepsWithFrame,
    requires: "Boros doboz",
  },
  {
    title: "Régi szerelmes levél",
    description:
      "A kandallóban a parázson egy megégett levél darabkái vannak 1893-ból a gróf aláírásával. A levél töredékes, de romantikus hangvételű, sajnos nem látszik kinek szólt…",
    location: "Szalon",
    image: BurntLetter,
  },
  {
    title: "A festmény (1899-ből)",
    description:
      "A padlás másik felében is van pár felborított kép és az egyik több mint meghökkentő, egy aktfestmény Zélie-ről, amelyet az aláírás szerint maga a Gróf készített — sógori viszonyhoz túlságosan is bensőséges, ha engem kérdeztek.",
    location: "Padlás",
    image: NudePainting,
    requires: "Régi szerelmes levél",
  },
  {
    title: "A titkos átjáró",
    description:
      "Zélie szobájában a komód feltűnően eltolva áll; a szőnyegen még láthatóak a szekrény elmozgatásának nyomai. Amikor valaki félrehúzza a bútort, mögötte egy keskeny cselédajtó tárul fel, amely a mosdóba vezet. Onnan már csak néhány lépés a könyvtár — a Gróf halálának helyszíne.",
    location: "Zélie szobája",
    image: HiddenDoor,
    requires: "A festmény (1899-ből)",
  },
  {
    title: "A tőr és a gyűrű",
    description:
      "A toalett tartályába rejtve találnak egy levélbontó tőrt, ez a gyilkos fegyver. A víz alján egy aranygyűrű fekszik — a belső oldalába finoman vésve Zélie-é monogramja. Úgy tűnik, amikor a tőrt elrejtette, a gyűrű véletlenül lecsúszott az ujjáról.",
    location: "Norelda szobája",
    image: KnifeAndRing,
    requires: "A titkos átjáró",
  },
];
