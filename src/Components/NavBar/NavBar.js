import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="title">iAnime</h1>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/shows">Shows</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

export default NavBar;
