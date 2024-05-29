import { useState } from "react";
import nextArrowIcon from "../../assets/chevron-right.svg";
import previousArrowIcon from "../../assets/chevron-left.svg";
import "../../style/slideshow.scss";

function Slideshow(props) {
  const {imgSrc, imgAlt} = props;
  const [imageIndex, setImageIndex] = useState(0);
    
  function nextPicture() {
    if (imageIndex === imgSrc.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function previousPicture() {
    if (imageIndex === 0) {
      setImageIndex(imgSrc.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  if (imgSrc.length === 1) {
    return (
      <div className="slideshow">
        <img src={imgSrc[imageIndex]} alt={imgAlt} className="slideshow__image"/>
        </div>
    )
  } else {
      return (
        <div className="slideshow">
            <img src={imgSrc[imageIndex]} alt={imgAlt} className="slideshow__image"/>
            <div className="slideshow__informations">
              <div className="slideshow-navigation">
                  <button onClick={previousPicture}><img src={previousArrowIcon} alt="Previous arrow"/></button>
                  <button onClick={nextPicture}><img src={nextArrowIcon} alt="Next arrow"/></button>
              </div>
            </div>
            <div className="slideshow__counter">
                <p>{imageIndex + 1}/{imgSrc.length}</p>
            </div>
        </div>
      )
    }
}
    
    export default Slideshow;
