import React, { useState } from "react";
import { createNewReview } from "../api-routes";
import StarRating from "./StarRating";
import "./deleteReviewButton.css";
import "./reviews.css";

function CreateReviewButton() {
  const [reviewBody, setReviewBody] = useState("");
  const [starRating, setStarRating] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
   

    try {
      if(token) {
        const response = await createNewReview(token, reviewBody, starRating);
      }
    } catch (error) {
      console.log(error);
    }
  };









  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="new review"></label>
        <input
          id="review-body"
          name="reviewbody"
          type="text"
          placeholder="What did you think of the game"
          value={reviewBody}
          onChange={(e) => {
            setReviewBody(e.target.value);
          }}
        />

        <StarRating userscore={starRating}/>



        <button className="button-reviews" type="submit">
          Review
        </button>
      </form>
    </div>
  );
}

export default CreateReviewButton;
