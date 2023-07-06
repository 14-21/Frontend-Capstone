import "./profile.css";
import { useState, useEffect } from "react";
// import { fetchUserData } from "../api-routes";

import { Link } from "react-router-dom";

function Profile() {
  const [username, setUsername] = useState("");

  //Fetching username so it can display on each user profile page.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  useEffect(() => {
    const renderUserData = () => {
      // const response = fetchUserData();
    };
    renderUserData();
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
            <Link to="/myarticles">Liked Articles</Link>
          </li>
          <li>
            {" "}
            <Link to="/myreviews">Reviews</Link>
          </li>
        </ul>
        <div className="border-line"></div>
      </div>
      <div className="profile-container">
        <div className="profile-block">
          <div id="profile-img">
            <img src="" />
          </div>
          <h2>Users Name</h2>
          <h3>Username</h3>
          <button>Edit Profile</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
