import React from "react";

const locations = [
  "Titre de la location1",
  "Titre de la location2",
  "Titre de la location3",
  "Titre de la location4",
  "Titre de la location5",
  "Titre de la location6",
];

function Card() {
  return (
    <div className="wrapper-grid">
      {locations.map((title, index) => (
        <div key={index} className="location">
          {title}
        </div>
      ))}
    </div>
  );
}

export default Card
