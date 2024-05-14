import React from "react";
import "../../utils/style/apropos.scss";
import photoapropos from "../../assets/photoapropos.png";
import arrowSvg from "../../assets/chevron-up.svg";

function Apropos() {
  return (
    <div className="apropos-page">
      <img className="logo" src={photoapropos} alt="montagnes" />
      <div className="valeurs">
        <div className="cadre-mot">
          <span className="mot-text">Fiabilité</span>
          <img className="arrow-icon" src={arrowSvg} alt="Arrow" />
        </div>
        <div className="cadre-mot">
          <span className="mot-text">Respect</span>
          <img className="arrow-icon" src={arrowSvg} alt="Arrow" />
        </div>
        <div className="cadre-mot">
          <span className="mot-text">Service</span>
          <img className="arrow-icon" src={arrowSvg} alt="Arrow" />
        </div>
        <div className="cadre-mot">
          <span className="mot-text">Sécurité</span>
          <img className="arrow-icon" src={arrowSvg} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}

export default Apropos;