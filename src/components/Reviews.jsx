import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api-routes";
import StarRating from "./StarRating";
import "./reviews.css";
import Comments from "./Comments";

function Reviews() {
  const [review, setReview] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const renderReview = await fetchReviews();
        // console.log(renderReview);
        setReview(renderReview);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, []);
  //hitting infinite loop when setting to review

  useEffect(() => {
    if (review.length) {
      const foundReview = review.filter((e) => {
        if (e.reviewGameId == id) {
          return true;
        } else {
          return false;
        }
      });

      if (foundReview) {
        setFilteredReview(foundReview);
      } else {
        setFilteredReview([]);
      }
    }
  }, [review]);

  return (
    <div className="review-card">
      {filteredReview && filteredReview.length ? (
        filteredReview.map((reviewEl) => {
          return (
            <div key={reviewEl.reviewId}>
              <p className="review-paragraph" id="review-user">
                {reviewEl.reviewbody}
              </p>
              <StarRating
                userscore={reviewEl.userscore}
                gameId={reviewEl.reviewGameId}
              />
            </div>
          );
        })
      ) : (
        <p>No Reviews Yet.</p>
      )}
    </div>
  );
}

export default Reviews;
