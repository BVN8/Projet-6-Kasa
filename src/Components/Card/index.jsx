import React from "react";
import { Link } from "react-router-dom";
import locationsDatas from "../../data/locationDatas.jsx";

function Card() {
  return (
    <div className="wrapper-grid">
      {locationsDatas.map((location) => (
        <Link key={location.id} to={`/locations/${location.id}`} className="location-link">
          <div
            className="location"
            style={{ backgroundImage: `url(${location.cover})` }}
          >
            <h2 className="location-title">{location.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
