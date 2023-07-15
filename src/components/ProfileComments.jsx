import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReviews } from "../api-routes";
import StarRating from "./StarRating";
import CreateReviewButton from "./CreateReviewButton";
import "./userReviews.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserReviewPage() {
  const [review, setReview] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const renderReview = await fetchReviews();
        console.log(renderReview);
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
    <>
      <div className="profile-nav">
        <ul>
          <li>
            <Link to="/mycomments">Comments</Link>
          </li>
          <li>
            {" "}
            <Link to="/myreviews">Reviews</Link>
          </li>
        </ul>
        <div className="border-line"></div>
      </div>
      <div className="user-review-card">
        <div className="user-title-center">
          <h1>Your Comments</h1>
        </div>
        {/* {filteredReview && filteredReview.length ? (
        filteredReview.map((reviewEl) => { */}
        {/* // console.log(reviewEl); return ( */}
        <div>
          <h2 className="user-gametitle">Title</h2>
          <p className="user-review-paragraph" id="review-user">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            maxime, corrupti nemo consequuntur debitis, enim doloribus aliquid
            animi nam temporibus cumque cum, dolores vero. Quaerat delectus
            facere est asperiores eaque.
          </p>
          <StarRating />
          <button className="review-field-buttons">
            Edit <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
          <h2 className="user-gametitle">Title</h2>
          <p className="user-review-paragraph" id="review-user">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            maxime, corrupti nemo consequuntur debitis, enim doloribus aliquid
            animi nam temporibus cumque cum, dolores vero. Quaerat delectus
            facere est asperiores eaque.
          </p>
          <StarRating />
          <button className="review-field-buttons">
            Edit <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
          <h2 className="user-gametitle">Title</h2>
          <p className="user-review-paragraph" id="review-user">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            maxime, corrupti nemo consequuntur debitis, enim doloribus aliquid
            animi nam temporibus cumque cum, dolores vero. Quaerat delectus
            facere est asperiores eaque.
          </p>
          <StarRating />
          <button className="review-field-buttons">
            Edit <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
        </div>
        {/* //     );
      //   })
      // ) : (
      //   <p>...Loading</p>
      // )} */}
      </div>
    </>
  );
}

export default UserReviewPage;
