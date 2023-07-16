import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./userReviews.css";
import DeleteComment from "./DeleteComment";
import UpdateCommentButton from "./UpdateCommentButton";

const BASE_URL = "http://localhost:8080";

function ProfileComments() {
  const [filteredComment, setFilteredComment] = useState([]);

  useEffect(() => {
    async function userCommentPage() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/api/user/review/comments`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        // Outside of fetch starting here.
        const result = await response.json();
        setFilteredComment(result);
      } catch (error) {
        console.log(error);
      }
    }
    userCommentPage();
  }, []);

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

      {/* COMMENTS     */}
      <div className="user-review-card">
        <div className="user-title-center">
          <h1>Your Comments</h1>
        </div>
        {filteredComment && filteredComment.length ? (
          filteredComment.map((commentEl) => {
            return (
              <div>
                <h2 className="user-gametitle">Title</h2>
                <p className="user-review-paragraph" id="review-user">
                  {commentEl.commentbody}
                </p>

                <UpdateCommentButton
                  id={commentEl.commentId}
                  filteredComment={filteredComment}
                  setFilteredComment={setFilteredComment}
                />

              {/* Test again */}
                <DeleteComment  
                  id={commentEl.commentId}
                  filteredComment={filteredComment}
                  setFilteredComment={setFilteredComment}
                />



              </div>
            );
          })
        ) : (
          <p>No Comments Yet</p>
        )}
      </div>
    </>
  );
}

export default ProfileComments;
