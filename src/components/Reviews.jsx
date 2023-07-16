import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api-routes";
import StarRating from "./StarRating";
import "./reviews.css";
import Comments from "./Comments";
import CreateReviewButton from "./CreateReviewButton";

function Reviews(props) {
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
              <Comments reviewId={reviewEl.reviewId} />
            </div>
          );
        })
      ) : (
        <p>No Reviews Yet.</p>
      )}
      <div id="greenbox">
        <CreateReviewButton
          selectedGame={props.selectedGame}
          filteredReview={filteredReview}
          setFilteredReview={setFilteredReview}
        />
      </div>
  
    </div>
  );
}

export default Reviews;
