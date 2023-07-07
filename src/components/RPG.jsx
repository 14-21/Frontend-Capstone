import "./genrePages.css";


function RPG(props) {
    return(
        <section id="genre-mainpage">
         <br/>
         <br/>
         <br/>
         <br/>
            <div id="genre-subcontainer">
                {props.allGames.length ? (
                    props.allGames.map((e) => {
                        if(e.genre == "RPG") {
                            return(

                                <div key={e.gameId} className="gamecard">
                                    {/* <p className="genre-game-title">{e.title}</p> */}
                                    <img className="genre-pic" src={e.picturecard} />
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

export default RPG;
