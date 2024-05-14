import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../utils/style/header.scss";

function Header() {
  const location = useLocation();

  const isVisited = (to) => {
    return location.pathname === to;
  };

  return (
    <nav className="nav-container">
      <img className="logo" src={logo} alt="logo kasa saumon" />
      <div>
        <Link to="/" className={`link ${isVisited("/") ? "visited" : ""}`}>
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={`link ${isVisited("/apropos") ? "visited" : ""}`}
        >
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;