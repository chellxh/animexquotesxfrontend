import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="title">
        <Link to="/">
          <h1 className="titleh1">iAnime</h1>
        </Link>
      </div>
      <div className="dropdown">
        <Button className={"button-dropbtn"} value={"Categories"} id={10} />
        <div className="dropdown-content">
          <Link to="/about">About</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/quotes">Quotes</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
