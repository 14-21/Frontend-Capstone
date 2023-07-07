import "./home.css";
import "./home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [featGame, setFeatGame] = useState("");
  const [secFeatGame, setSecFeatGame] = useState("");

  //Randomly seleting 2 games for Featured Games.
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* FEATURED GAMES SECTION */}
      <h1 id="trending">Trending Games</h1>
      <h1 id="trending">Trending Games</h1>
      <div id="game-spotlight-container">
        {featGame && featGame.title ? (
          <div className="single-feat-game">
            <div className="feat-game">
              <p className="featgame-title">{secFeatGame.title}</p>

              <Link className="featlinks" to={`/games/${secFeatGame.gameId}`}>
                Game Homepage
              </Link>
              <p className="featgame-title">{secFeatGame.title}</p>

              <Link className="featlinks" to={`/games/${secFeatGame.gameId}`}>
                Game Homepage
              </Link>
            </div>
            <div className="feat-pic">
              <img className="feat-pic" src={secFeatGame.picturecard} />
            </div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}

        {secFeatGame && secFeatGame.title ? (
          <div className="single-feat-game">
            <div className="feat-game">
              <p className="featgame-title">{featGame.title}</p>

              <Link className="featlinks" to={`/games/${featGame.gameId}`}>
                Game Homepage
              </Link>
              <p className="featgame-title">{featGame.title}</p>

              <Link className="featlinks" to={`/games/${featGame.gameId}`}>
                Game Homepage
              </Link>
            </div>
            <div className="feat-pic">
              <img className="feat-pic" src={featGame.picturecard} />
            </div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

   
      {/* GENRE SECTION HERE */}
      <div id="genres">

          <Link to="/adventure">
                <h2 className='genre-type'>Adventure</h2>
          </Link>
          <div id="adventure">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "Adventure") {
                                return(
                                    <div key={e.gameId} className="genre-gamecard">
                                        <img className="genre-game-pic" src={e.picturecard} />
                                        <p className="genre-game-title">{e.title}</p>

                                    </div>
                                )
                            }
                            
                        })
                        
                    ) : <p>loading</p>
                }
          </div> 

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
      <br />
    </>
  );
}

export default Home;
