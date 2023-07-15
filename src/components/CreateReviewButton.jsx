import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import "./deleteReviewButton.css";
import "./reviews.css";

const BASE_URL = "http://localhost:8080";

function CreateReviewButton(props) {
  const [reviewbody, setReviewBody] = useState("");
  //State for userscore
  const [starRating, setStarRating] = useState(0);

      // submit function passed in OnSubmit in form below.
      const handleSubmit = async(e) => {
        e.preventDefault()
   
        try {
            const result = await createReview(); // Passing our async function in from below.


        
        } catch (error) {
            console.log(error)
        }

    }

    async function createReview() {
      try {
        console.log(props.selectedGame, reviewbody, starRating)
              const token = localStorage.getItem("token");
              console.log(token)
              const response = await fetch(`${BASE_URL}/games/post/review`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify({
                    reviewbody: reviewbody,
                    userscore: starRating,
                    reviewGameId: props.selectedGame
                  }), 
                })
                  // Outside of fetch starting here.
              const result = await response.json();

              const filteredReviewCopy = [...props.filteredReview]
              filteredReviewCopy.unshift(result)
              props.setFilteredReview(filteredReviewCopy)
              // console.log(filteredReviewCopy)

              setReviewBody("")
              setStarRating(0)
              console.log(result)
              // return result;
          
      } catch (error) {
          console.log(error)
      }
  }











  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new review"></label>
        <input
          id="review-body"
          name="reviewbody"
          type="text"
          placeholder="What did you think of the game?"
          value={reviewbody}
          onChange={(e) => {
            console.log(e.target.value)
            setReviewBody(e.target.value);
          }}
        />

        <StarRating userscore={starRating} gameId={null} setStarRating={setStarRating}/>


        <div id="reviewbutton-container">
          <button className="button-reviews" type="submit">
            Review
          </button>
        </div>  
      </form>
    </div>
  );
}

export default CreateReviewButton;
