import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header>
      <h1>
        <Link to="/">
          <span className="logo">{"//"}</span>
          Toad Game
        </Link>
      </h1>
      <nav>
        <NavLink className="button" exact to="/">
          New Game
        </NavLink>
        <NavLink className="button" to="/Leaderboard">
          Leaderboards
        </NavLink>
        <NavLink className="button" to="/Credits">
          Credits
        </NavLink>
      </nav>
    </header>
    );
}

export default Header;