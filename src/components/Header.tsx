import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-12 bg-gray-800">
      <div className="flex max-w-[1200px] mx-auto w-full justify-between items-center">
        <Link to="/">Térkép</Link>
        <Link to="/characters">Karakterek</Link>
        <Link to="/bag">Táska</Link>
        <Link to="/about">A játékról</Link>
      </div>
    </header>
  );
};

export default Header;
