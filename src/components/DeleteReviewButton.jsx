import React, { useState } from "react";
import { deleteReview } from "../api-routes";
import "./deleteReviewButton.css";

function DeleteReview() {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = async (e) => {
    const response = deleteReview();
    try {
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
        <label htmlFor="title">New Review</label>
        <input
          name="reviewbody"
          type="text"
          placeholder="What did you think of the game"
          value={newReview}
          onChange={(e) => {
            setNewReview(e.target.value);
          }}
        ></input>
        <button className="review-btn" type="submit">
          Review
        </button>
      </form>
    </div>
  );
}

export default DeleteReview;
