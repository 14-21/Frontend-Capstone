import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const setStarRating = props.setStarRating ? props.setStarRating : null;
  useEffect(() => {
    if (props.userscore) {
      setRating(props.userscore);
    } else {
      setRating(null);
    }
  }, [props.userscore]);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        // console.log(star);
        return (
          // <label key={props.gameId ? props.gameId : i}>
          <label key={i}>
            <input
              className="star-input"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={(e) => {
                setRating(ratingValue);
                if (setStarRating) {
                  setStarRating(e.target.value);
                }
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "rgb(128, 128, 128)"}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
