import React, { useState } from "react";
import arrowSvg from "../../assets/chevron-up.svg";
import "../../style/collapse.scss";


function Collapse(props) {
  const {categoryName, categoryDetails} = props;
  const [activeButton, setActiveButton] = useState(false);

    return (
      <div className="accordion">
        <button 
        className={`accordion__title ${activeButton ? "active" : ""}`} 
        onClick={() => setActiveButton(!activeButton)}
        >
        <p>{categoryName}</p>
        <img className={`${activeButton ? "active" : ""}`}
        src={arrowSvg} alt="arrowDown"
        >
        </img>
        </button>
        <div 
        className={`accordion__description ${activeButton ? "active" : ""}`}
        >
          <div className={`accordion__description-details ${activeButton ? "active" : ""}`}>{categoryDetails}</div>
        </div>
      </div>
    )
  }
  
export default Collapse;