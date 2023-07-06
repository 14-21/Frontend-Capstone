import React from "react";
import { Link } from "react-router-dom";
import "./userReviews.css";

function UserReviewPage() {
  return (
    <div className="profile-nav">
      <ul>
        <li>
          <Link to="/mycomments">Comments</Link>
        </li>
        <li>
          <Link to="/myarticles">Liked Articles</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <div className="border-line"></div>
    </div>
  );
}

export default UserReviewPage;
