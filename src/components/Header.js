import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header id="allheader">
      <h1 id="header">
        <Link to="/">
          <span id="title" hidden={true}>{"//"}</span>
          Toad's Tempestuous Test!
        </Link>
      </h1>
      <nav id="navbar">
        <NavLink className="navbtn" exact to="/">
          New Game
        </NavLink>
        <NavLink className="navbtn" to="/Leaderboard">
          Leaderboards
        </NavLink>
        <NavLink className="navbtn" to="/Credits">
          Credits
        </NavLink>
      </nav>
    </header>
    );
}

export default Header;