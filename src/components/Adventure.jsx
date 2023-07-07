// GENRE 1 COMP of AllReviews
import "./adventure.css";
// import { useEffect, useState } from "react";

function Adventure(props) {

 
   
    return(
        <section id="adventure-main">
         <br/>
         <br/>
         <br/>
         <br/>
            <div id="adventure-container">
                {props.allGames.length ? (
                    props.allGames.map((e) => {
                        if(e.genre == "Adventure") {
                            return(

                                <div key={e.gameId} className="gamecard">
                                    {/* <p className="genre-game-title">{e.title}</p> */}
                                    <img className="genre-pic" src={e.picturecard} />
                                </div>
                            )
                            }
                        
                    })
                    
                ) : <p>loading</p>

            }
          })
          
          
        ) : (
          <p>loading</p>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Adventure;

