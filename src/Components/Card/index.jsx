import React from "react";
import { Link } from "react-router-dom";

const locations = [
  "Titre de la location 1",
  "Titre de la location 2",
  "Titre de la location 3",
  "Titre de la location 4",
  "Titre de la location 5",
  "Titre de la location 6",
];

function Card() {
  return (
    <div className="wrapper-grid">
      {locations.map((title, index) => (
        <Link key={index} to="/logement" className="location-link">
          <div className="location">
            {title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
