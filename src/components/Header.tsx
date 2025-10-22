import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import { Fragment } from "react/jsx-runtime";
import { useSound } from "../hooks/useSound";

const Header = () => {
  const { playSound } = useSound();

  return (
    <header className="w-full p-12 bg-[url(/img/header-bg.jpg)] bg-cover shadow-lg">
      <div className="flex max-w-[1200px] mx-auto w-full justify-center items-center gap-12">
        {navLinks.map(({ title, url }, index) => {
          const isNotLastItem = index + 1 != navLinks.length;

          return (
            <Fragment key={index}>
              <Link
                to={url}
                onClick={() => playSound("turnPage")}
                className="transition-all px-4 py-2 border-2 border-transparent hover:-translate-y-1 hover:bg-paper hover:shadow-lg hover:border-tint"
              >
                {title}
              </Link>
              {isNotLastItem && <span className="text-gray-400">|</span>}
            </Fragment>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
