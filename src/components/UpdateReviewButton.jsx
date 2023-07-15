import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./reviews.css";

export const UpdateReviewsButton = (props) => {
  const reviewId = props.id;
  const [reviewbody, setReviewBody] = useState("");
  const [starRating, setStarRating] = useState(null);
  const BASE_URL = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendPutRequest();
      console.log(result, "test");
    } catch (error) {
      console.log(error);
    }
  };

  const sendPutRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token, reviewbody, starRating, reviewId);
      const response = await fetch(`${BASE_URL}/games/user/review/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userscore: starRating,
          reviewUserId: props.user,
          reviewbody: reviewbody,
          reviewId: reviewId,
        }),
      });
      const result = await response.json();
      console.log(result);

      const updatedAllReviews = props.filteredReview.filter((singleReview) => {
        if (singleReview.reviewId !== reviewId) {
          return singleReview;
        }
      });

      const newUpdatedAllReviews = [...updatedAllReviews, result];
      props.setFilteredReview(newUpdatedAllReviews);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            name="userscore"
            type="text"
            value={starRating}
          />
        </label>
        <button type="submit" className="review-field-buttons">
          Edit ➡
        </button>
      </form>
    </div>
  );
};
