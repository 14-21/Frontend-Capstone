import "./allGames.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AllGames(props) {
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

  return (
    <>
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
      <button type="submit" onClick={handleClick}>
        Sort by title
      </button>

      <br />
      <br />

      <h1 id="allgames-header">All Games</h1>
      <div id="allgames">
        {filteredGame.length ? (
          filteredGame.map((e) => {
            return (
              <div className="single-game-card" key={e.gameId}>
                <Link to={`/games/${e.gameId}`}>
                  <img id="allgames-picturecards" src={e.picturecard} />
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

export default AllGames;
