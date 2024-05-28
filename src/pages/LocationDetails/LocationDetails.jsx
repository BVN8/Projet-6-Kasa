import React from "react";
import { useParams, Navigate } from "react-router-dom";
import locationsDatas from "../../data/locationDatas";
import "../../style/locationdetails.scss"

function LocationsDetails() {
  const { locationId } = useParams();
  const location = locationsDatas.find((location) => location.id === locationId);

  if (!location) {
    return <Navigate to="/error" />;
  } else {

  return (
    <nav>
      <img src={location.cover} alt={location.title} />
      <div>
      <p className="location-name">{location.title}</p>
        <img src={location.host.picture} alt={location.host.name} />
        <p>Hôte : {location.host.name}</p>
      </div>
      <p>Note : {location.rating}</p>
      <p>Localisation : {location.location}</p>
      <ul>
        {location.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <ul>
        {location.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{location.description}</p>
    </nav>
  );
}
}

export default LocationsDetails;
