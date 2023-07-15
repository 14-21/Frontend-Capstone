import "./profile.css";
import "../index.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";

function AdminUsers() {
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.

  // This function allows lowercase letters to be included in the filter.
  let filteredUser = allUsers.filter((user) => {
    let lowercaseUsername = user.username.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();
    if (lowercaseUsername.includes(lowercaseQuery)) {
      return user;
    }
  });

  // Fetching all games from A-Z
  const handleClick = () => {
    const arrayUsernames = allUsers.values(username);
    const sortedNames = arrayUsernames.sort((a, b) => a - b);

    return sortedNames;
  };

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
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const renderAllUsers = await fetchUserData();
        console.log(renderAllUsers);
        setAllUsers(renderAllUsers);
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

      <div id="admin-allusers">
        {filteredUser.length ? (
          filteredUser.map((e) => {
            return (
              <div className="admin-game-card" key={e.gameId}>
                <Link to={`/games/users/${e.userId}`}>
                  <p id="gametitle">{e.username}</p>
                </Link>
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

export default AdminUsers;
