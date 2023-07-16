import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_URL = "http://localhost:8080";

function DeleteCommentButton(props) {
  console.log(props.id);
  const id = props.id;
  // console.log(props)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteComment(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteComment(commentId) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(commentId);
      const response = await fetch(
        `${BASE_URL}/api/games/comments/delete/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ); // Outside of fetch starting here.
      const result = await response.json();
      console.log(result);
      if (result.length) {
        const deletedFilteredComment = props.filteredComment.filter(
          (singleComment) => {
            if (singleComment.commentId !== commentId) {
              return true;
            }
          }
        );
        props.setFilteredComment(deletedFilteredComment);
      }
    } catch (error) {
      console.log(error);
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

export default DeleteCommentButton;
