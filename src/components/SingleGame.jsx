import './singlegames.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function SingleGame(props) {
    const [selectedGame, setSelectedGame] = useState("");

    // console.log(props.allGames)
    const { id } = useParams();

    // console.log(id)

    useEffect(() => {
        const foundGame = props.allGames.find((e) => {
            if(e.gameId == id){
                return true
            } else {
                return false
            }
        });
    // console.log(foundGame);
    
    if(foundGame) {
        setSelectedGame(foundGame)
    } else {
        setSelectedGame("Game not found.")
    }   
    }, [props.allGames])
  

    return(
        <div id="single-game-container">
            {selectedGame && selectedGame.title ? (
                
                <div id="selected-game-container">
                    <div id="selected-pictureheader">
                        <img id="picheader" src={selectedGame.pictureheader} /> 
                    </div>    

                    <div id="synopsis-container">
                         <h1 id="titleheader">{selectedGame.title}</h1>
                         <p id="synopsis">{selectedGame.synopsis}</p>
                    </div>
                   
                    <br/>
                    <br/>
                    <hr></hr>
                    <br/>
                    <br/>



                    <div id="aboutgame">
                        <h3 className='singleheaders'>About</h3>
                        <p className='singlegamepara'>{selectedGame.about}</p>
                    </div>

                    <br/>
                    <br/>

                    <div id="for">
                        <h3 className='singleheaders'>Who it's for</h3>
                        <p className='singlegamepara'>{selectedGame.forgamer}</p>
                        <br/>
                        <br/>
                        <img className="picbody" src={selectedGame.picturebody} />
                    </div>

                    <br/>
                    <br/>

                    <div id="notfor">
                        <h3 className='singleheaders'>Who it's not for</h3>
                        <p className='singlegamepara'>{selectedGame.notfor}</p>
                        <br/>
                        <br/>
                        <img className="picbody" src={selectedGame.picturefooter} />
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            <hr></hr>
                </div>
            ) : <p>Loading . . .</p> }


            <h1 id="overallheader">Our Review</h1>
    
         
            <div id="ourReview-container">
                <h2 id="ourReview-title">{selectedGame.title}</h2>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                <div id="our-review">
                   <p id="ourscore">{selectedGame.ourscore}</p>
                   <p id="review">{selectedGame.ourreview}</p>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h1 id="users-review-header">Community Reviews</h1>
                
                <br/>
                <br/>

                <div id="users-thoughts">
                   <p id="users-score">USER NUMBER SCORE HERE
                     <button id="leave-comment-button">COMMENT BUTTON HERE</button>
                   </p>
                   <p id="users-review">USERS REVIEW HERE</p>
                </div>

                {/* Should only show if theres a comment on review */}
                <div id="users-comments-container">
                    <p id="users-comments">USERS COMMMENTS HERE PLACEHOLDER</p> 
                </div>

                {/* NEEDS TO BE CONNECTED */}
                <button id="leave-review-button">PLACEHOLDER Leave a review button</button>


            </div>
        
        
        
        
        
        </div>



    )

}

export default SingleGame;