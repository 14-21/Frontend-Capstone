import "./profile.css";
import "../index.css";
import "./darkMode.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";

function Profile() {
  const [username, setUsername] = useState({});
  const [userData, setUserData] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    //Retrigger each time someone logs in or out
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const renderUser = await fetchUserData(token);
          console.log(renderUser);
          setUserData(renderUser);
          setIsLoggedIn(renderUser.username);
          console.log(isLoggedIn);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
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
      <div className="profile-container">
        <div className="profile-block">
          <div id="profile-img">
            <img src={userData.profilepic} />
          </div>
          <h2 id="profile-line-spacer">
            {userData.fname} {userData.lname}
          </h2>
          <h3>{userData.username}</h3>
        </div>
      </div>
    </>
  );
}

export default Profile;
