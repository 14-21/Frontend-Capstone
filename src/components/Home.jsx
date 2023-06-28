import './home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Adventure from "./Adventure";

function Home(props) {
  const [featGame, setFeatGame] = useState("");
  const [secFeatGame, setSecFeatGame] = useState("");


  //Randomly seleting 2 games for GameSpolight.
  useEffect(() => {
    const randomGame1 =
      props.allGames[Math.floor(Math.random() * props.allGames.length)];
    const filteredGames = props.allGames.filter((e) => {
      if (e.title !== randomGame1.title) {
        return true;
      } else {
        return false;
      }
    });

    const randomGame2 =
      filteredGames[Math.floor(Math.random() * props.allGames.length)];

    setFeatGame(randomGame1);
    setSecFeatGame(randomGame2);
    console.log(randomGame1);
  }, [props.allGames]);

  return (
    <>
      <h1>Home</h1>

      <h2>Game Spotlight</h2>  
      <div id="game-spotlight-container">
        {featGame && featGame.title ? (
          <div className="single-feat-game">
            <div className="feat-game">{secFeatGame.title}</div>
            <div className="feat-pic">{secFeatGame.picture}</div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}

        {secFeatGame && secFeatGame.title ? (
          <div className="single-feat-game">
            <div className="feat-game">{featGame.title}</div>
            <div className="feat-pic">{featGame.picture}</div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
      </div>

    {/* Genre Sections Start */}

            <Link to="/adventure">
                <h2>Adventure</h2>
            </Link>
            {/* <Adventure/> */}
    </>
  );
}

export default Home;
