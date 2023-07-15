import "./profile.css";
import "../index.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";

function Admin(props) {
  const [username, setUsername] = useState({});
  const [userData, setUserData] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.
  // const [gamesAZ, setGamesAZ] = useState([])

  // This function allows lowercase letters to be included in the filter.
  let filteredGame = props.allGames.filter((game) => {
    let lowercaseTitle = game.title.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();

    if (lowercaseTitle.includes(lowercaseQuery)) {
      return game;
    }
  });

  // Fetching all games from A-Z
  const handleClick = () => {
    const arrayTitles = props.allGames.values(title);
    const sortedGames = arrayTitles.sort((a, b) => a - b);

    return sortedGames;
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
          setIsLoggedIn(renderUser.username);
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

      <div id="admin-allgames">
        {filteredGame.length ? (
          filteredGame.map((e) => {
            return (
              <div className="admin-game-card" key={e.gameId}>
                <Link to={`/games/${e.gameId}`}>
                  <p id="gametitle">{e.title}</p>
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

export default Admin;
