import { Link } from "react-router-dom";
import "./genrePages.css";


function Action(props) {
    return(
        <section id="genre-mainpage">
         <br/>
         <br/>
         <h1 id="genre-pages-header">Action</h1>
         <br/>
         <br/>
            <div id="genre-subcontainer">
                {props.allGames.length ? (
                    props.allGames.map((e) => {
                        if(e.genre == "Action") {
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

export default Action;