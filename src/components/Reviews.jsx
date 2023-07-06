import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api-routes";
import StarRating from "./StarRating";
import "./reviews.css";

function Reviews() {
  const [review, setReview] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const renderReview = await fetchReviews();
        setReview(renderReview);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, []);

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
    <div>
      {filteredReview && filteredReview.length ? (
        filteredReview.map((reviewEl) => {
          console.log(reviewEl);
          return (
            <div key={reviewEl.reviewId}>
              <p id="users-review">{reviewEl.reviewbody}</p>
              <StarRating userscore={reviewEl.userscore} />
              <p>{reviewEl.reviewbody}</p>
            </div>
          );
        })
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

export default Reviews;
