import React from 'react';
import bannerImage from "../../assets/photohome.png";
import "../../style/home.scss";
import Card from '../../Components/Card'
import Banner from "../../Components/Banner/Banner"

function Home() {
  return (
    <div className='home-page'>
          <Banner 
            imgSrc={bannerImage}
            imgText="Chez vous, partout et ailleurs"
            imgAlt="Rochers au bord de la mer"
          />
      <div className="wrapper">
        <Card />
      </div>
    </div>
  );
}



export default Home;