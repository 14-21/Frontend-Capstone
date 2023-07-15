import { useState } from "react";
import { useParams } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reviews.css";

const BASE_URL = "http://localhost:8080";

export const UpdateCommentButton = (props) => {
    //id = commentEl.origReviewId
  const id = props.id;
  console.log(props);
  const [commentbody, setCommentBody] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("enter the submit");
      const result = await sendPutRequest(id);
      console.log(result, "test");
    } catch (error) {
      console.log(error);
    }
  };

  const sendPutRequest = async (commentId) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token, commentbody, props.id);
      const response = await fetch(`${BASE_URL}/api/games/reviews/update/comments/${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        //NEED TO ADD IDS
        body: JSON.stringify({
          commentbody: commentbody,
          origReviewId: props.filteredComments.origReviewId,
          origUserId: props.filteredComments.origUserId
        }),
      });
      const result = await response.json();
      console.log(result);

      const updatedAllComments = props.filteredComments.filter((singleComment) => {
        if (singleComment.commentId !== id) {
          return singleComment;
        }
      });


      const newUpdatedAllComments = [...updatedAllComments, result];
      props.setFilteredComments(newUpdatedAllComments);
      
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="update comment">
          <input
            className="review-body"
            type="text"
            placeholder="update"
            value={commentbody}
            onChange={(e) => {
              console.log(e.target.value);
              setCommentBody(e.target.value);
            }}
          ></input>
        </label>

        <button onSubmit={handleSubmit} type="submit" className="review-field-buttons">
          Edit ➡ <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentButton;