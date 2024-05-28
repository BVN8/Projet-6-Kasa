import React, { useState } from "react";
import "../../style/about.scss";
import photoapropos from "../../assets/photoapropos.png";
import Collapse from "../../Components/Collapse/Collapse";
import Banner from "../../Components/Banner/Banner";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="apropos-page">
      <div className="about-banner">
        <Banner imgSrc={photoapropos} imgAlt="Paysage de montagnes" />
      </div>
      <div className="valeurs">
        <Collapse
          index={0}
          openIndex={openIndex}
          toggleOpen={toggleOpen}
          title="Fiabilité"
        >
          Texte sur la fiabilité
        </Collapse>
        <Collapse
          index={1}
          openIndex={openIndex}
          toggleOpen={toggleOpen}
          title="Respect"
        >
          Texte sur le respect
        </Collapse>
        <Collapse
          index={2}
          openIndex={openIndex}
          toggleOpen={toggleOpen}
          title="Service"
        >
          Texte sur le service
        </Collapse>
        <Collapse
          index={3}
          openIndex={openIndex}
          toggleOpen={toggleOpen}
          title="Sécurité"
        >
          Texte sur la sécurité
        </Collapse>
      </div>
    </nav>
  );
}

export default About;
