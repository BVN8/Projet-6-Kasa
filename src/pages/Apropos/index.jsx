import React, { useState } from "react";
import "../../utils/style/apropos.scss";
import photoapropos from "../../assets/photoapropos.png";
import arrowSvg from "../../assets/chevron-up.svg";

function Apropos() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="apropos-page">
      <img className="logo" src={photoapropos} alt="montagnes" />
      <div className="valeurs">
        <div className={`cadre-mot ${openIndex === 0 ? "no-margin" : ""}`}>
          <span onClick={() => toggleOpen(0)} className="mot-text">Fiabilité</span>
          <button className="arrow-icon-button">
            <img
              className={`arrow-icon ${openIndex === 0 ? "rotated" : ""}`}
              src={arrowSvg}
              alt="Arrow"
            />
          </button>
        </div>
        {openIndex === 0 && <div className="depliant-apropos">Texte sur la fiabilité</div>}
        
        <div className={`cadre-mot ${openIndex === 1 ? "no-margin" : ""}`}>
          <span onClick={() => toggleOpen(1)} className="mot-text">Respect</span>
          <button className="arrow-icon-button">
            <img
              className={`arrow-icon ${openIndex === 1 ? "rotated" : ""}`}
              src={arrowSvg}
              alt="Arrow"
            />
          </button>
        </div>
        {openIndex === 1 && <div className="depliant-apropos">Texte sur le respect</div>}

        <div className={`cadre-mot ${openIndex === 2 ? "no-margin" : ""}`}>
          <span onClick={() => toggleOpen(2)} className="mot-text">Service</span>
          <button className="arrow-icon-button">
            <img
              className={`arrow-icon ${openIndex === 2 ? "rotated" : ""}`}
              src={arrowSvg}
              alt="Arrow"
            />
          </button>
        </div>
        {openIndex === 2 && <div className="depliant-apropos">Texte sur le service</div>}

        <div className={`cadre-mot ${openIndex === 3 ? "no-margin" : ""}`}>
          <span onClick={() => toggleOpen(3)} className="mot-text">Sécurité</span>
          <button className="arrow-icon-button">
            <img
              className={`arrow-icon ${openIndex === 3 ? "rotated" : ""}`}
              src={arrowSvg}
              alt="Arrow"
            />
          </button>
        </div>
        {openIndex === 3 && <div className="depliant-apropos">Texte sur la sécurité</div>}
      </div>
    </nav>
  );
}

export default Apropos;