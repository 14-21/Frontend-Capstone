import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./reviews.css";

function UpdateReviewsButton(props) {
  const reviewId = props.id;
  const [reviewbody, setReviewBody] = useState("");
  const [starRating, setStarRating] = useState(0);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    if (props.filteredReview.length) {
      console.log(props.filteredReview, reviewId);
      const singleUpdatedAllReviews = props.filteredReview.find(
        (singleReview) => {
          if (singleReview.reviewId === reviewId) {
            return singleReview;
          }
        }
      );
      console.log(singleUpdatedAllReviews);
      if (singleUpdatedAllReviews) {
        setReviewBody(singleUpdatedAllReviews.reviewbody);
        setStarRating(singleUpdatedAllReviews.userscore);
      }
    }
  }, [props.filteredReview]);

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
      console.log(starRating);
      if (token) {
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

        const updatedAllReviews = props.filteredReview.filter(
          (singleReview) => {
            if (singleReview.reviewId !== reviewId) {
              return singleReview;
            }
          }
        );

        const newUpdatedAllReviews = [...updatedAllReviews, result];
        props.setFilteredReview(newUpdatedAllReviews);
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="update review">
          <input
            className="review-body"
            onChange={(e) => {
              // console.log(e.target.value);
              setReviewBody(e.target.value);
            }}
            name="newreview"
            type="text"
            value={reviewbody}
          ></input>
          <StarRating setStarRating={setStarRating} userscore={starRating} />
        </label>
        <button type="submit" className="review-field-buttons submit">
          Submit ➡
        </button>
      </form>
    </div>
  );
}

export default UpdateReviewsButton;
