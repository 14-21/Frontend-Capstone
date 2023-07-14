import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./reviews.css";

export const UpdateReviews = (props) => {
  const { id } = useParams();
  const [reviewbody, setReviewBody] = useState("");
  const [userscore, userScore] = useState(null);

  const handleUpdate = props.review.filter((singleReview) => {
    if (singleReview.reviewUserId == id) {
      return singleReview;
    }
  })[0];

  const sendPutRequest = async (e) => {
    e.preventDefault();
    const BASE_URL = "http://localhost:8080";
    try {
      const response = await fetch(`${BASE_URL}/games/user/review/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: {
            reviewbody: reviewbody,
            userscore: userscore,
          },
        }),
      });
      const result = await response.json();
      console.log(result);

      const updatedAllReviews = props.review.filter((singleReview) => {
        if (singleReview.reviewGameId !== id) {
          console.log(singleReview);
          return singleReview;
        }
      });

      const newUpdatedAllReviews = [...updatedAllReviews, result];
      props.setReview(newUpdatedAllReviews);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={sendPutRequest}>
        <label htmlFor="updatereview">
          <input
            className="review-body"
            onChange={(e) => setNewReviewBody(e.target.value)}
            name="newreview"
            type="text"
            placeholder="update"
            value={reviewbody}
          ></input>
          <StarRating
            onChange={(e) => setUserScore(e.target.value)}
            name="usescore"
            type="text"
            value={userscore}
          />
        </label>
      </form>
      <button type="submit" className="review-field-buttons">
        Edit ➡
      </button>
    </div>
  );
};
