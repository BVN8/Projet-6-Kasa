import React from "react";
import "../../utils/style/error.scss";
import logo404 from "../../assets/D_404.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <nav className="error-page">
      <img className="StyleLogo" src={logo404} alt="logo 404"></img>
      <div className="error-phrase">
        Oups ! La page que vous demandez n'existe pas.
      </div>
      <div>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </nav>
  );
}

export default Error;
