import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import "./userReviews.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_URL = "http://localhost:8080";


function UserReviews(props) {
  const [filteredReview, setFilteredReview] = useState("");
  const [reviewGameTitle, setReviewGameTitle] = useState("")


  useEffect(() => {
    async function userReviewPage() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/api/games/user/specific/reviews`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          
        });
        
        // Outside of fetch starting here.
        const result = await response.json();
        console.log(result);
        // console.log(props.userData)
        setFilteredReview(result);
        // return result;
      } catch (error) {
        console.log(error);
      }
    }
    userReviewPage();
  }, []);

  // useEffect(() => {

  // })


  return (
    <>
      <div className="profile-nav">
        <ul>
          <li>
            <Link to="/mycomments">Comments</Link>
          </li>
          <li>
            {" "}
            <Link to="/myarticles">Liked Articles</Link>
          </li>
          <li>
            {" "}
            <Link to="/myreviews">Reviews</Link>
          </li>
        </ul>
        <div className="border-line"></div>
      </div>

      {/* REVIEWS */}
      <div className="user-review-card">
        <div className="user-title-center">
          <h1>Your Reviews</h1>
        </div>
        {filteredReview && filteredReview.length ? (
        filteredReview.map((reviewEl) => {
        return (
        <div>
          <h2 className="user-gametitle">Title</h2>
          <p className="user-review-paragraph" id="review-user">
            {reviewEl.reviewbody}
          </p>
    
          <StarRating  userscore={reviewEl.userscore} gameId={reviewEl.reviewGameId} />

          <button className="review-field-buttons">
          Edit <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button> 

        </div>
            );
        })
      ) : (
        <p>No Reviews Yet</p>
      )}
      </div>
    </>
  );
}

export default UserReviews;

