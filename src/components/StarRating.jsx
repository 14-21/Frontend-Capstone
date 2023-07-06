import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (props.userscore) {
      setRating(props.userscore);
    } else {
      setRating(null);
    }
  }, []);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={
                // ask about parantheses around hover||rating - no Para, breaks component.
                ratingValue <= (hover || rating)
                  ? "#ffc107"
                  : "rgb(128, 128, 128)"
              }
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
