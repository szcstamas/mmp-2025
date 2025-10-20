import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-12 bg-[url(/img/header-bg.jpg)] bg-cover shadow-lg">
      <div className="flex max-w-[1200px] mx-auto w-full justify-center items-center gap-12">
        <Link
          to="/"
          className="transition-all px-4 py-2 hover:-translate-y-1 hover:bg-white hover:font-bold hover:shadow-lg"
        >
          Térkép
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          to="/characters"
          className="transition-all px-4 py-2 hover:-translate-y-1 hover:bg-white hover:font-bold hover:shadow-lg"
        >
          Szereplők
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          to="/bag"
          className="transition-all px-4 py-2 hover:-translate-y-1 hover:bg-white hover:font-bold hover:shadow-lg"
        >
          Táska
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          to="/about"
          className="transition-all px-4 py-2 hover:-translate-y-1 hover:bg-white hover:font-bold hover:shadow-lg"
        >
          A játékról
        </Link>
      </div>
    </header>
  );
};

export default Header;
