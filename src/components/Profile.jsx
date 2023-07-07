import "./profile.css";
import "../index.css";
import { useState, useEffect } from "react";
import { fetchReviews, fetchUserData } from "../api-routes";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);

  const { id } = useParams();

  //Fetching username so it can display on each user profile page.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const renderUser = await fetchUserData();
        setUserData(renderUser);
      } catch (error) {
        console.log(error);
      }
      getUserData();
    };
  }, []);

  useEffect(() => {
    if (userData.length) {
      const foundUserData = userData.filter((e) => {
        if (e.userId == id) {
          return true;
        } else {
          return false;
        }
      });

      if (foundUserData) {
        setFilteredUserData(foundUserData);
      } else {
        setFilteredUserData([]);
      }
    }
  }, [userData]);

  return (
    <>
      {filteredUserData ? (
        filteredUserData.map((userDataEl) => {
          console.log(userDataEl);
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
        })
      ) : (
        <p>Please Sign Up</p>
      )}
    </>
  );
}

export default Profile;
