import React from "react";
import { Link } from "react-router-dom";

function UserReviewPage() {
  return (
    <div className="profile-nav">
      <ul>
        <li>
          <Link to="/mycomments">Comments</Link>
        </li>
        <li>Liked Articles</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default UserReviewPage;
