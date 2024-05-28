import Banner from "../../Components/Banner/Banner";
import bannerImage from "../../assets/photoapropos.png";
import Collapse from "../../Components/Collapse/Collapse";
import "../../style/about.scss"

function About() {
    return (
      <main>
        <div className="about-banner">
          <Banner 
            imgSrc={bannerImage}
            imgAlt="Paysage de montagnes"
          />
        </div>
        <div className="accordions-wrapper-about">
          <Collapse 
            categoryName="Fiabilité"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Collapse 
            categoryName="Respect"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Collapse 
            categoryName="Service"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Collapse 
            categoryName="Sécurité"
            categoryDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </main>
    )
  }
  
  export default About;