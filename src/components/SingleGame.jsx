import "./singlegames.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import Comments from "./Comments";
import StarRating from "./StarRating";

// import { fetchReviews } from "../api-routes";

function SingleGame(props) {
  const [selectedGame, setSelectedGame] = useState("");

  // console.log(props.allGames)
  const { id } = useParams();

  useEffect(() => {
    const foundGame = props.allGames.find((e) => {
      if (e.gameId == id) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(foundGame);

    if (foundGame) {
      setSelectedGame(foundGame);
    } else {
      setSelectedGame("Game not found.");
    }
  }, [props.allGames]);

  console.log(selectedGame);

  return (
    <div id="single-game-container">
      {selectedGame && selectedGame.title ? (
        <div id="selected-game-container">
          <div id="selected-pictureheader">
            <img id="picheader" src={selectedGame.pictureheader} />
          </div>

          <div id="synopsis-container">
            <h1 id="titleheader">{selectedGame.title}</h1>
            <p id="synopsis">{selectedGame.synopsis}</p>
          </div>

          <br />
          <br />
          <hr></hr>
          <br />
          <br />

          <div id="aboutgame">
            <h3 className="singleheaders">About</h3>
            <p className="singlegamepara">{selectedGame.about}</p>
          </div>

          <br />
          <br />

          <div id="for">
            <h3 className="singleheaders">Who it's for</h3>
            <p className="singlegamepara">{selectedGame.forgamer}</p>
            <br />
            <br />
            <img className="picbody" src={selectedGame.picturebody} />
          </div>

          <br />
          <br />

          <div id="notfor">
            <h3 className="singleheaders">Who it's not for</h3>
            <p className="singlegamepara">{selectedGame.notfor}</p>
            <br />
            <br />
            <img className="picbody" src={selectedGame.picturefooter} />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr></hr>
          <br />
          <br />
        </div>
      ) : (
        <p>Loading . . .</p>
      )}

      {/* ADMIN REVIEW */}
      <h1 id="overallheader">Our Review</h1>
      <div id="ourReview-container">
        <h2 id="ourReview-title">{selectedGame.title}</h2>
        <div id="our-review">
          <div id="ourscore">
            <StarRating
              userscore={selectedGame.ourscore}
              gameId={selectedGame.gameId}
            />
          </div>
          <div id="review">{selectedGame.ourreview}</div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* USERS REVIEWS    */}
      <div className="input-cards">
        <Reviews />
      </div>
      <Comments />
    </div>
  );
}

export default SingleGame;
