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
          <div className="single-genre-container">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "Adventure") {
                                return(
                                  // <Link to="/adventure">
                                      <div key={e.gameId} className="genre-gamecard">
                                        <Link to="/adventure">
                                          <img className="genre-game-pic" src={e.picturecard} />
                                          <p className="genre-game-title">{e.title}</p>
                                        </Link>
                                      </div>
                                )
                            }
                        })
                    ) : <p>Loading</p>
                }
          </div> 

          <Link to="/action">
                <h2 className='genre-type'>Action</h2>
          </Link>
          <div className="single-genre-container">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "Action") {
                                return(
                                  // <Link to="/adventure">
                                      <div key={e.gameId} className="genre-gamecard">
                                        <Link to="/action">
                                          <img className="genre-game-pic" src={e.picturecard} />
                                          <p className="genre-game-title">{e.title}</p>
                                        </Link>
                                      </div>
                                )
                            }
                            
                        })
                    ) : <p>Loading</p>
                }
          </div> 


          <Link to="/survival">
                <h2 className='genre-type'>Survival</h2>
          </Link>
          <div className="single-genre-container">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "Survival") {
                                return(
                                  // <Link to="/adventure">
                                      <div key={e.gameId} className="genre-gamecard">
                                        <Link to="/survival">
                                          <img className="genre-game-pic" src={e.picturecard} />
                                          <p className="genre-game-title">{e.title}</p>
                                        </Link>
                                      </div>
                                )
                            }
                            
                        })
                    ) : <p>Loading</p>
                }
          </div>        

          <Link to="/rpg">
                <h2 className='genre-type'>RPG</h2>
          </Link>
          <div className="single-genre-container">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "RPG") {
                                return(
                                  // <Link to="/adventure">
                                      <div key={e.gameId} className="genre-gamecard">
                                        <Link to="/rpg">
                                          <img className="genre-game-pic" src={e.picturecard} />
                                          <p className="genre-game-title">{e.title}</p>
                                        </Link>
                                      </div>
                                )
                            }
                            
                        })
                    ) : <p>Loading</p>
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
