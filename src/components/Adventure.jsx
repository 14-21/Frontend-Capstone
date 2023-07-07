// GENRE 1 COMP of AllReviews
import "./adventure.css";
// import { useEffect, useState } from "react";

function Adventure(props) {
  return (
    <section id="adventure-main">
      <br />
      <br />
      <br />
      <br />
      <div id="adventure-container">
        {props.allGames.length ? (
          props.allGames.map((e) => {
            if (e.genre == "Adventure") {
              return (
                <div key={e.gameId} className="gamecard">
                  {/* <p className="genre-game-title">{e.title}</p> */}
                  <img className="genre-pic" src={e.picturecard} />
                </div>
              );
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

// const [adventureGames, setAdventureGames] = useState([]);

// useEffect(() => {
//     const foundGames = props.allGames.filter((e) => {
//         if(e.genre === "Adventure RPG") {
//             return foundGames;
//         } else {
//             return "No games found";
//         }
//     });

// }, []);

// return(
//     <div className="genre-container">
//         <h1>adventure</h1>
//         {props.allGames.length ? (
//             adventureGames.map((e) => {
//                 return (
//                     <div key={e.genre}>
//                         {e.title}
//                     </div>
//                 )
//             })

//         ) : <p>Loading..</p>}

//     </div>
// )
