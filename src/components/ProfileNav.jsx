import "./profile.css";
import "../index.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";
function ProfileNav() {
  const [username, setUsername] = useState({});
  const [userData, setUserData] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  //Fetching username so it can display on each user profile page.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // console.log(user);
      setUsername(JSON.parse(user));
    }
  }, []);

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
    <div>
      <Link to="/profile/user">
        <img className="profile-img" src={userData.profilepic}></img>
      </Link>
    </div>
  );
}

export default ProfileNav;
