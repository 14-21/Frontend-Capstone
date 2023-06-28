import "./profile.css";
import { useState, useEffect } from "react";

function Profile() {
  const [username, setUsername] = useState("");

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
          <li>Comments</li>
          <li>Liked Articles</li>
          <li>Reviews</li>
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
