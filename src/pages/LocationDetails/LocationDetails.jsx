import React from "react";
import { useParams, Navigate } from "react-router-dom";
import locationsDatas from "../../data/locationDatas";
import "../../style/locationdetails.scss";
import Slideshow from "../../Components/Slideshow/Slide_show";
import Rating from "../../Components/Rating/Rating.jsx"

function LocationsDetails() {
  const { locationId } = useParams();
  const location = locationsDatas.find(
    (location) => location.id === locationId
  );

  if (!location) {
    return <Navigate to="/error" />;
  }

  return (
    <nav>
      <Slideshow
        imgSrc={location.pictures}
        imgAlt={`${location.title} ${location.location}`}
      />
      <div className="location-wrapper-host">
        <p className="location-name">{location.title}</p>
        <img
          className="host-picture"
          src={location.host.picture}
          alt={location.host.name}
        />
        <div className="host-name">
          <p>{location.host.name.split(" ")[0]}</p>
          <p>{location.host.name.split(" ")[1]}</p>
        </div>
      </div>
      <p className="appartment-location">{location.location}</p>
      <div className="location-wrapper">
        <ul className="location-tags-list">
          {location.tags.map((tag) => (
            <li className="location-tags" key={`${tag}-${location.id}`}>{tag}</li>
          ))}
        </ul>
        <Rating rating={location.rating} />
      </div>
      <ul>
        {location.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <p>{location.description}</p>
    </nav>
  );
}

export default LocationsDetails;
