import "./genrePages.css";
import { Link } from "react-router-dom";


function MOBA(props) {
    return(
        <section id="genre-mainpage">
         <br/>
         <br/>
         <br/>
         <br/>
            <div id="genre-subcontainer">
                {props.allGames.length ? (
                    props.allGames.map((e) => {
                        if(e.genre == "MOBA") {
                            return(

                                <div key={e.gameId} className="gamecard">
                                    <Link to={`/games/${e.gameId}`} >
                                        <img className="genre-pic" src={e.picturecard} />
                                        <p className="genre-game-title">{e.title}</p>
                                    </Link>
                                </div>
                            )
                            }
                        
                    })
                    
                ) : <p>Loading</p>

            }
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default MOBA;

