const BASE_URL = "http://localhost:8080";

function DeleteGameButton(props) {
  const id = props.id;
  // console.log(props, "i am props")

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
      console.log(token);
      console.log(gameId)
      const response = await fetch(`${BASE_URL}/api/games/delete/${gameId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }); // Outside of fetch starting here.
      const result = await response.json();
      console.log(result), "i am result";
      if (result.data) {
        const deletedFilteredGame = props.allGames.filter((singleGame) => {
          if (singleGame.gameId !== id) {
            return singleGame;
          }
        });
        //Not updating real time?
        props.setAllGames(deletedFilteredGame);
        console.log(deletedFilteredGame, "deletedgames")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleSubmit} className="review-field-buttons delete">
        Delete ➡
      </button>
    </div>
  );
}

export default DeleteGameButton;
