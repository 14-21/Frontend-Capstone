import './allReviews.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function AllReviews(props) {
    return(
        <>
            <h1>All games</h1>
            <div id="allgames">
                {props.allGames.length ? (
                    props.allGames.map((e) => {
                        return(
                            <div className="single-game-card"key={e.gameId}>
                               <Link to="/all-games/:id">
                               <p id="gametitle">{e.title}</p>
                               
                               </Link>
                               
                            </div>
                        )
                    })
                ) : <p>Loading..</p>
            }

            </div>






        </>
    )
}

export default AllReviews;