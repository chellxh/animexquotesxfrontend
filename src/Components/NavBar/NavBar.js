import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import image from "../../assets/images/ianime.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="title">
        <Link to="/">
          <img src={image} alt="iAnime" />
        </Link>
      </div>
      <div className="about">
        <Link to="/about">About</Link>
      </div>
      <div className="dropdown">
        <Button className={"button-dropbtn"} value={"Categories"} id={10} />
        <div className="dropdown-content">
          <Link to="/shows">Shows</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/quotes">Quotes</Link>
        </div>
      </div>
      <div className="dropdown">
        <Button className={"button-dropbtn"} value={"Create New"} id={5} />
        <div className="dropdown-content">
          <a href="/shows/new">Show</a>
          <a href="/characters/new">Character</a>
          <a href="/quotes/new">Quote</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
