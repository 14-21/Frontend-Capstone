import "./allGames.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllGames(props) {
  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.

  // This function allows lowercase letters to be included in the filter.
  let filteredGame = props.allGames.filter((game) => {
    let lowercaseTitle = game.title.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();

    if (lowercaseTitle.includes(lowercaseQuery)) {
      return game;
    }
  });

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
