import "./profile.css";
import "../index.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchAllUserData } from "../api-routes";
import { Link } from "react-router-dom";

function AdminAllUsers(props) {
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.

  // This function allows lowercase letters to be included in the filter.
  let filteredUser = userData.filter((user) => {
    let lowercaseUsername = user.username.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();
    if (lowercaseUsername.includes(lowercaseQuery)) {
      return user;
    }
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log(user);
      setUsername(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    //Retrigger each time someone logs in or out
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
          const renderUser = await fetchAllUserData(token);
          console.log(renderUser);
          setUserData(renderUser);
         
        
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
            <Link to="/admin">Games</Link>
          </li>
          <li>
            {" "}
            <Link to="/creategame">Create Game</Link>
          </li>
          <li>
            {" "}
            <Link to="/adminusers">All Users</Link>
          </li>
          <li>
            {" "}
            <Link to="/profile/user">Profile</Link>
          </li>
        </ul>
        <div className="border-line"></div>
        <div></div>
      </div>
      <br />
      <form id="searchbar">
        <label htmlFor="title"></label>
        <input
          id="search"
          name="search-query"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => {
            //This allows users to change the search box.
            console.log(event.target.value);
            setSearchQuery(event.target.value);
          }}
        ></input>
      </form>

      <div id="admin-allUsers">
        {filteredUser.length ? (
          filteredUser.map((e) => {
            return (
              <div className="admin-game-card admin-user-card" key={e.gameId}>
                <ul className="admin-user-list">
                  <li className="user-field">{e.fname}</li>
                  <li className="user-field">{e.lname}</li>
                  <li className="user-field">UserId: {e.userId}</li>
                </ul>
              </div>
            );
          })
        ) : (
          <p>No Match</p>
        )}
      </div>
    </>
  );
}

export default AdminAllUsers;
