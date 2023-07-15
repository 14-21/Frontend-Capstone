import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./reviews.css";

export const UpdateReviewsButton = (props) => {
  const id = props.id;
  console.log(props);
  const [reviewbody, setReviewBody] = useState("");
  const [starRating, setStarRating] = useState(null);
  const BASE_URL = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("enter the submit");
      const result = await sendPutRequest();
      console.log(result, "test");
    } catch (error) {
      console.log(error);
    }
  };

  const sendPutRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token, reviewbody, starRating, props.id);
      const response = await fetch(`${BASE_URL}/games/user/review/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          reviewbody: reviewbody,
          userscore: starRating,
          reviewId: id,
        }),
      });
      const result = await response.json();
      console.log(result);

      const updatedAllReviews = props.filteredReview.filter((singleReview) => {
        if (singleReview.reviewId !== id) {
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
          {/* <StarRating
            onChange={(e) => setStarRating(e.target.value)}
            name="usescore"
            type="text"
            value={starRating}
          /> */}
        </label>
        <button type="submit" className="review-field-buttons">
          Edit ➡
        </button>
      </form>
    </div>
  );
};
