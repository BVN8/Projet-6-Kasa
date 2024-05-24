import React from "react";
import { Link } from "react-router-dom";
import locations from "../Data";

function Card() {

  return (
    <div className="wrapper-grid">
      {locations.map((location, index) => (
        <Link key={index} to="/logement" className="location-link">
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