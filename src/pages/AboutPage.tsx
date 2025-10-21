import { motion } from "framer-motion";
import PageHeadline from "../components/PageHeadline";
import { useState } from "react";

const AboutPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (key: string) =>
    setOpenSection(openSection === key ? null : key);

  const sampleCharacters = [
    {
      name: "Gróf Viktor Blackwood",
      role: "Gazdag örökös",
      secret: "Titokban hatalmas adóssága van.",
      costume: "Retro öltöny, monokli, fésült haj",
    },
    {
      name: "Eliza Moon",
      role: "Régi barátnő / médium",
      secret: 'Rendszeresen lát "jelenségeket".',
      costume: "Hosszú fekete ruha, ezüst ékszerek",
    },
    {
      name: "Prof. Anton Weber",
      role: "Kutató / nyomozó típus",
      secret: "Elrejt egy fontos bizonyítékot.",
      costume: "Köpeny, szemüveg, jegyzetfüzet",
    },
    {
      name: "Maya Nightingale",
      role: "Titokzatos szomszéd",
      secret: "Valami miatt nem akarja, hogy mások a padlásra menjenek.",
      costume: "Kendő, régi kabát, suttogó hang",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col gap-12 justify-center items-center w-full"
    >
      <PageHeadline
        hl="Murder Mystery Party 2025"
        p="A Murder Mystery Party egy interaktív szerepjáték, ahol minden játékos egy karakter bőrébe bújik. A cél: kideríteni, ki követte el a gyilkosságot, miközben titkok, hazugságok és félrevezetések szövik át a vérben áztatott, sejtelmes estét. A lényeg a szerepjáték, az intrika és persze a szórakozás."
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 rounded-2xl shadow-2xl"
      >
        <section className="bg-gray-850/50 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Téma & Hangulat</h2>
          <p className="mt-2 text-gray-300">
            Az este helyszíne egy régi kastély — tele titkokkal és suttogó
            folyosókkal.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div>
              <h3 className="font-medium">Díszítés</h3>
              <ul className="list-disc ml-5 mt-1 text-gray-300">
                <li>Pókhálók, töklámpások, gyertyafény</li>
                <li>Borostyán, régi festmények, sötét függönyök</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Zene</h3>
              <p className="text-gray-300 mt-1">
                Halk, hátborzongató soundtrack, eső- és ablakkopogás effektek.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Öltözködés</h3>
              <p className="text-gray-300 mt-1">
                Kérd a vendégeket, hogy jelmezben érkezzenek a karakterükhöz
                illően.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Résztvevők & Szerepek</h2>
          <p className="mt-2 text-gray-300">
            Minden vendég kap egy karakterlapot: szerep, titkok és kapcsolatok.
            Egy szereplő a gyilkos — ezt egyedül tudja.
          </p>

          <div className="mt-4">
            <h3 className="font-medium">Szerepek röviden</h3>
            <ul className="list-disc ml-5 mt-1 text-gray-300">
              <li>Áldozat — a játék elején vagy menet közben „meghal”.</li>
              <li>Nyomozó — extra információt kaphat (opcionális).</li>
              <li>Szemtanúk és szereplők — mindenkinek titkai vannak.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Előkészületek</h2>
          <ol className="list-decimal ml-5 mt-2 text-gray-300">
            <li>Küldd ki a karakterlapokat előre (1–2 héttel).</li>
            <li>Díszítsd a helyszínt a témához illően.</li>
            <li>Helyezz el rejtett nyomokat: jegyzetek, tárgyak, üzenetek.</li>
            <li>
              Játékmester: valaki tartsa kézben a történet menetét (kérdések,
              időzítés, végső leleplezés).
            </li>
          </ol>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Játékmenet</h2>
          <div className="mt-2 text-gray-300">
            <p>
              Bevezetés után az áldozat „meghal”. A vendégek nyomoznak,
              kérdéseket tesznek fel, szövetségeket kötnek — a gyilkos titokban
              próbálja eltussolni a bizonyítékokat.
            </p>

            <h3 className="mt-4 font-medium">Lépések</h3>
            <ul className="list-disc ml-5 mt-1 text-gray-300">
              <li>Bemutatkozás karakterben.</li>
              <li>Nyomozás és bizonyítékgyűjtés (szabad beszélgetés).</li>
              <li>
                Időszakos „nyom-mező” feladatok (opcionális): kis küldetések,
                hogy bizonyítékot szerezz.
              </li>
              <li>Vádaskodás: mindenki jelöl egy gyanúsítottat.</li>
              <li>Leleplezés és történet összegzése a játékmester által.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Szabályok</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-300">
            <li>
              Maradj a karakterben — mindenképp karakterben beszélj a játék
              során.
            </li>
            <li>
              Tartsd meg a titkokat — a gyilkos és a titkok ne derüljenek ki
              előre.
            </li>
            <li>
              Tisztelet és jó hangulat: a cél a szórakozás, ne vidd túlzásba a
              személyeskedést.
            </li>
            <li>
              Ne mutass rá egyértelműen az előre elhelyezett nyomokra, ha az
              zavarhatja a játékot.
            </li>
          </ul>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Extra tippek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-gray-300">
            <div>
              <h3 className="font-medium">Kiegészítők</h3>
              <ul className="list-disc ml-5 mt-1">
                <li>Nyomtatható karakterkártyák (alul van minta).</li>
                <li>
                  Időzítő/két forduló: korlátozott nyomozási idő növeli a
                  feszültséget.
                </li>
                <li>
                  Apró feladatok: lopj el egy tárgyat, hagyj titkos jegyzetet.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Időtartam</h3>
              <p>
                Átlag: 1.5–2 óra. Lehet rövidebb vagy hosszabb a vendégek
                lelkesedésétől függően.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-850/40 p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Példa karakterkártyák</h2>
            <button
              onClick={() => toggle("chars")}
              className="px-3 py-1 bg-orange-600 rounded-md text-sm font-medium"
            >
              {openSection === "chars" ? "Bezárás" : "Megnyitás"}
            </button>
          </div>

          {openSection === "chars" && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleCharacters.map((c, i) => (
                <article
                  key={i}
                  className="p-4 bg-gray-900/40 rounded-lg border border-gray-700"
                >
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong>Szerep:</strong> {c.role}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong>Titok:</strong> {c.secret}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong>Jelmez:</strong> {c.costume}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
