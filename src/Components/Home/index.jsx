import React from 'react';
import photohome from "../../assets/photohome.png";
import "../../utils/style/home.scss";
import Card from '../Card'

function Home() {
  return (
    <div className='home-page'>
      <Banner />
      <div className="wrapper">
        <Card />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="header-container">
      <img className="main-photo" src={photohome} alt='cotes maritimes' />
      <div className="photo-phrase">Chez-vous, partout et ailleurs</div>
    </div>
  );
}

export default Home;