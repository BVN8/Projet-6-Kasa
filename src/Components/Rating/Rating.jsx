import starEmpty from "../../assets/star-grey.svg";
import starFull from "../../assets/star-red.svg";
import "../../style/rating.scss";

function Rating(props) {
    const {rating} = props;
    const maxRating = 5;
    const fullStars = rating;
    const emptyStars = maxRating - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(starFull);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(starEmpty);
    }

    return (
        <div className="rating">
            <ul className="stars-list">
                <li className="stars-list__item">
                {stars.map((star, index) => (
                <img key={index} src={star} alt="étoile"/>
            ))}
                </li>
            </ul>
        </div>
    )

}

export default Rating;