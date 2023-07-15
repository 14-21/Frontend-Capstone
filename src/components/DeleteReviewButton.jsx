import React, { useState } from "react";
import "./deleteReviewButton.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_URL = "http://localhost:8080/";

function DeleteReviewButton(props) {
  const id = props.id;
  // console.log(props)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteReview(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteReview(reviewId) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(reviewId);
      const response = await fetch(
        `${BASE_URL}/api/games/user/review/delete/${reviewId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ); // Outside of fetch starting here.
      const result = await response.json();
      console.log(result);
      if (result.length) {
        const deletedFilteredReview = props.filteredReview.filter(
          (singleReview) => {
            if (singleReview.reviewId !== reviewId) {
              return true;
            }
          }
        );

        props.setFilteredReview(deletedFilteredReview);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleSubmit} className="review-field-buttons">
        Delete <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </button>
    </div>
  );
}

export default DeleteReviewButton;
