import "../../style/banner.scss";

function Banner(props) {
  const { imgSrc, imgText, imgAlt } = props;

  return (
    <div className="banner">
      <img src={imgSrc} alt={imgAlt} />
      <h1>{imgText}</h1>
    </div>
  );
}

export default Banner;
