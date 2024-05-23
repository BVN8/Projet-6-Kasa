import React, { useState } from "react";
import grandephotologement from "../../assets/grandephotologement.png";
import "../../utils/style/logement.scss";
import arrowleft from "../../assets/chevron-left.svg";
import arrowright from "../../assets/chevron-right.svg";
import stargrey from "../../assets/star-grey.svg";
import starred from "../../assets/star-red.svg";
import arrowup from "../../assets/chevron-up.svg";

function Logement() {
  const [openSections, setOpenSections] = useState({
    description: false,
    equipements: false,
  });

  const toggleOpen = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="logement-container">
      <div className="logement-card_image-container">
        <img
          src={grandephotologement}
          alt="loft cozy"
          className="logement-card_image"
        />
        <button className="arrow arrow_left">
          <img src={arrowleft} alt="Arrow Left" />
        </button>
        <button className="arrow arrow_right">
          <img src={arrowright} alt="Arrow Right" />
        </button>
        <span className="image-card_numbers">1/4</span>
      </div>
      <div className="loft-card_content">
        <div className="loft-card_header">
          <h1 className="loft-card_title">
            Cozy loft on the Canal Saint-Martin
          </h1>
          <div className="loft-card_user">
            <span className="loft-card_username">
              Alexandre <br />
              Dumas
            </span>
            <div className="loft-card_avatar"></div>
          </div>
        </div>
        <div className="loft-card_location">Paris, Île-de-France</div>
        <div className="loft-card_tags_rating-container">
          <div className="loft-card_tags">
            <span className="loft-card_tag">Cozy</span>
            <span className="loft-card_tag">Canal</span>
            <span className="loft-card_tag">Paris 10</span>
          </div>
          <div className="loft-card_rating">
            <span className="loft-card_redstar">
              <img src={starred} alt="étoile rouge" />
            </span>
            <span className="loft-card_redstar">
              <img src={starred} alt="étoile rouge" />
            </span>
            <span className="loft-card_redstar">
              <img src={starred} alt="étoile rouge" />
            </span>
            <span className="loft-card_greystar">
              <img src={stargrey} alt="étoile grise" />
            </span>
            <span className="loft-card_greystar">
              <img src={stargrey} alt="étoile grise" />
            </span>
          </div>
        </div>
        <div className="loft-card_details">
          <div>
            <div
              onClick={() => toggleOpen("description")}
              className="loft-card_detail"
            >
              Description
              <button className="arrow-icon">
                <img
                  className={`arrow-icon ${
                    openSections.description ? "rotated" : ""
                  }`}
                  src={arrowup}
                  alt="Arrow"
                />
              </button>
            </div>
            {openSections.description && (
              <div className="loft-card_folding">Texte de la description</div>
            )}
          </div>

          <div>
            <div
              onClick={() => toggleOpen("equipements")}
              className="loft-card_detail"
            >
              Équipements
              <button className="arrow-icon">
                <img
                  className={`arrow-icon ${
                    openSections.equipements ? "rotated" : ""
                  }`}
                  src={arrowup}
                  alt="Arrow"
                />
              </button>
            </div>
            {openSections.equipements && (
              <div className="loft-card_folding">Liste des équipements</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
