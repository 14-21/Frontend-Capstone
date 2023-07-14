import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./reviews.css";

export const UpdateReviewsButton = (props) => {
  const { id } = useParams();
  const [reviewbody, setReviewBody] = useState("");
  const [starRating, setStarRating] = useState(null);
  const BASE_URL = "http://localhost:8080";

  const handleUpdate = props.review.filter((singleReview) => {
    if (singleReview.reviewUserId == id) {
      console.log(singleReview);
      return singleReview;
    }
  })[0];

  const sendPutRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/games/user/review/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          body: {
            reviewbody: reviewbody,
            userscore: starRating,
          },
        }),
      });
      const result = await response.json();
      console.log(result);

      const updatedAllReviews = props.review.filter((singleReview) => {
        if (singleReview.reviewGameId !== id) {
          return singleReview;
        }
      });

      const newUpdatedAllReviews = [...updatedAllReviews, result];
      props.setReviewBody(newUpdatedAllReviews);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={reviewId}>
      <form onSubmit={sendPutRequest}>
        <label htmlFor="updatereview">
          <input
            className="review-body"
            onChange={(e) => {
              console.log(e.target.value);
              setReviewBody(e.target.value);
            }}
            name="newreview"
            type="text"
            placeholder="update"
            value={reviewbody}
          ></input>
          <StarRating
            onChange={(e) => setStarRating(e.target.value)}
            name="usescore"
            type="text"
            value={starRating}
          />
        </label>
      </form>
      <button type="submit" className="review-field-buttons">
        Edit ➡
      </button>
    </div>
  );
};
