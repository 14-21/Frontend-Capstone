// import "./deleteReviewButton.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_URL = "http://localhost:8080";


function DeleteGameButton(props) {
  const id = props.id
  // console.log(props)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteGame(id);
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteGame(gameId) {
    try {
        const token = localStorage.getItem("token");
        console.log(token)
        console.log(gameId)
        const response = await fetch(`${BASE_URL}/api/games/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },

        });  // Outside of fetch starting here.
        const result = await response.json()
        console.log(result)
        if(result.length) {
            //props. needs to be changed
            const deletedFilteredGame = props.filteredReview.filter((singleGame) => {
                if(singleGame.gameId !== gameId){
                    return true
                }
            })
             //props. needs to be changed
            // props.setFilteredReview(deletedFilteredGame)
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
       

        <button onClick={handleSubmit} className="review-field-buttons">
          Delete <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </button> 
      
    </div>
  );
}

export default DeleteGameButton;
