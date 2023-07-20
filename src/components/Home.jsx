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
    // console.log(randomGame1);
  }, [props.allGames]);

  return (
    <>
      {/* FEATURED GAMES SECTION */}
      <h1 id="trending">Trending Games</h1>

      <div id="game-spotlight-container">
        {featGame && featGame.title ? (
          <div className="single-feat-game">
            <Link className="featlinks" to={`/games/${featGame.gameId}`}>
              <div className="feat-game">
                <h6 className="featgame-title">{featGame.title}</h6>
              </div>

              <div className="feat-pic-container">
                <img className="feat-pic" src={featGame.picturecard} />
              </div>
            </Link>
          </div>
        ) : (
          <h3>Loading</h3>
        )}

        {/* 2nd FEAT GAME */}
        {secFeatGame && secFeatGame.title ? (
          <div className="single-feat-game">
            <Link className="featlinks" to={`/games/${secFeatGame.gameId}`}>
              <div className="feat-game">
                <h6 className="featgame-title">{secFeatGame.title}</h6>
              </div>

              <div className="feat-pic-container">
                <img className="feat-pic" src={secFeatGame.picturecard} />
              </div>
            </Link>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
      </div>

      {/* GENRE SECTION HERE */}
      <div id="genres">
        <hr className="divider"></hr>

        <Link to="/adventure">
          <h2 className="genre-type">Adventure</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Adventure") {
                return (
              
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/adventure">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/action">
          <h2 className="genre-type">Action</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Action") {
                return (
                
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/action">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/survival">
          <h2 className="genre-type">Survival</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Survival") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/survival">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/rpg">
          <h2 className="genre-type">RPG</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "RPG") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/rpg">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/horror">
          <h2 className="genre-type">Horror</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Horror") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/horror">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/fps">
          <h2 className="genre-type">FPS</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "FPS") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/fps">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/simulation">
          <h2 className="genre-type">Simulation</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Simulation") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/simulation">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/sports">
          <h2 className="genre-type">Sports</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Sports") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/sports">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/strategy">
          <h2 className="genre-type">Strategy</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Strategy") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/strategy">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>


        <Link to="/racing">
          <h2 className="genre-type">Racing</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "Racing") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/racing">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/mmo">
          <h2 className="genre-type">MMO</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "MMO") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/mmo">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <Link to="/moba">
          <h2 className="genre-type">MOBA</h2>
        </Link>
        <div className="single-genre-container">
          {props.allGames.length ? (
            props.allGames.map((e) => {
              if (e.genre == "MOBA") {
                return (
                  <div key={e.gameId} className="genre-gamecard">
                    <Link to="/moba">
                      <img className="genre-game-pic" src={e.picturecard} />
                      <p className="genre-game-title">{e.title}</p>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading</p>
          )}
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
