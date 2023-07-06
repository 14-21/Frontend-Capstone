import React from "react";
import { useState, useEffect } from "react";
import { FaCommentSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProfileComments() {
  const [username, setUsername] = useState("");
  let [myComments, setMyComments] = useState([]);

  //Fetching username so it can display on each user profile page.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <>
      <div className="profile-nav">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/myarticles">Liked Articles</Link>
          </li>
          <li>
            <Link to="/myreviews">Reviews</Link>
          </li>
        </ul>
        <div className="border-line"></div>
      </div>
      <h1>Your Comments</h1>
    </>
  );
}

export default ProfileComments;
