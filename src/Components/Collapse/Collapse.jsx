import React from "react";
import arrowSvg from "../../assets/chevron-up.svg";
import "../../style/about.scss";

function Collapse({ index, openIndex, toggleOpen, title, children }) {
  return (
    <div className={`cadre-mot ${openIndex === index ? "no-margin" : ""}`}>
      <span onClick={() => toggleOpen(index)} className="mot-text">{title}</span>
      <button className="arrow-icon-button">
        <img
          className={`arrow-icon ${openIndex === index ? "rotated" : ""}`}
          src={arrowSvg}
          alt="Arrow"
        />
      </button>
      {openIndex === index && <div className="depliant-apropos">{children}</div>}
    </div>
  );
}

export default Collapse;