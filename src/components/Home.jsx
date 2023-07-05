import './home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




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
            <div className="feat-game">
              <p className='featgame-title'>{secFeatGame.title}</p>
              
              <Link className="featlinks" to={`/games/${secFeatGame.gameId}`}>Learn More</Link>
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
              <p className='featgame-title'>{featGame.title}</p>
              
              <Link className="featlinks" to={`/games/${featGame.gameId}`}>Learn More</Link>
            </div>
            <div className="feat-pic">
              <img className="feat-pic" src={featGame.picturecard} />
            </div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
      </div>

      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>    


    {/* Genre Sections Start */}
      <div id="genres">

          <Link to="/adventure">
                <h2 className='genre-type'>Adventure</h2>
          </Link>
          <div id="adventure">
              {props.allGames.length ? (
                        props.allGames.map((e) => {
                            if(e.genre == "Adventure RPG") {
                                return(
                                    <div className="genre-gamecard">
                                        {/* <p className="genre-game-title">{e.title}</p> */}
                                        <img className="genre-game-pic" src={e.picturecard} />
                                    </div>
                                )
                            }
                            
                        })
                        
                    ) : <p>loading</p>
                }
          </div> 
      </div>
      
      <br/>  
      <br/>  
      <br/>  
      <br/>  
      <br/>   


         
    </>
  );
}

export default Home;
