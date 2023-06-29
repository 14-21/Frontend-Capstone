// GENRE 1 COMP of AllReviews

import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8080"

function Adventure() {
    // const [adventureGames, setAdventureGames] = useState([]);
    const [gameGenre, setGameGenre] = useState("");

    useEffect(() => {
        async function genreType() {
            try {
                const response = await fetch(`${BASE_URL}/games/genre`);
                const result = await response.json();
           

                setGameGenre(result.genre)
            } catch (error) {
                console.log(error);
            }
        }
        genreType();
    }, [])
   
    return(
        <>
            {gameGenre.length ? (
                gameGenre.map((e) => {
                    if(e.genre === "Adventure RPG") {
                        return(
                            <div>
                                {e.title}
                            </div>
                        )
                    }
                    
                })
                
            ) : <p>loading</p>
        }
        
        </>
    )

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