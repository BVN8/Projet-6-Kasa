import { useState } from "react";
import nextArrowIcon from "../../assets/chevron-right.svg";
import previousArrowIcon from "../../assets/chevron-left.svg";
import "../../style/slideshow.scss";

function Slideshow({ imgSrc = [], imgAlt = "slideshow image" }) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextArrow() {
    setImageIndex((prevIndex) => (prevIndex === imgSrc.length - 1 ? 0 : prevIndex + 1));
  }

  function handlePreviousArrow() {
    setImageIndex((prevIndex) => (prevIndex === 0 ? imgSrc.length - 1 : prevIndex - 1));
  }

  if (imgSrc.length === 0) {
    return <div>No images available</div>;
  }

  if (imgSrc.length === 1) {
    return (
      <div className="slideshow-container">
        <img src={imgSrc[0]} alt={imgAlt} className="slideshow-img" />
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      <img src={imgSrc[imageIndex]} alt={imgAlt} className="slideshow-img"/>
      <div className="button-slide">
        <button onClick={handlePreviousArrow} className="arrow-button">
          <img src={previousArrowIcon} alt="Previous arrow" />
        </button>
        <button onClick={handleNextArrow} className="arrow-button">
          <img src={nextArrowIcon} alt="Next arrow" />
        </button>
      </div>
      <div className="slide-indicator">
        <p>{imageIndex + 1}/{imgSrc.length}</p>
      </div>
    </div>
  );
}

export default Slideshow;
