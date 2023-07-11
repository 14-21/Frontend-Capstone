import "./profile.css";
import "../index.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";

function Profile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);

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
        console.log(renderUser);
        setUserData(renderUser);
        //wont need below
        setUserData(renderUser);
        if (userData.length) {
          const foundUserData = userData.filter((e) => {
            if (e.userId == id) {
              return true;
            } else {
              return false;
            }
          });
          //backend talk --need below
          if (foundUserData) {
            setFilteredUserData(foundUserData);
          } else {
            setFilteredUserData([]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      {userData ? (
        userData.map((userDataEl) => {
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
                    <img src={userDataEl.profilepic} />
                  </div>
                  <h2>
                    {userDataEl.fname} {userDataEl.lname}
                  </h2>
                  <h3>{userDataEl.username}</h3>
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
