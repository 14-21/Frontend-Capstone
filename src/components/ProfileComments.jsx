import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./userReviews.css";
import UserCommentLocalEdit from "./UserCommentLocalEdit";

const BASE_URL = "http://localhost:8080";

function ProfileComments() {
  const [filteredComment, setFilteredComment] = useState([]);
  const [user, setUser] = useState([]);


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // console.log(user);
      setUser(JSON.parse(user));
    }
  }, []);


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
        const result = await response.json();
        setFilteredComment(result);
        console.log("i am result", result)
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
              <UserCommentLocalEdit
                commentEl={commentEl}
                filteredComment={filteredComment}
                setFilteredComment={setFilteredComment}
                user={user}
              />
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
