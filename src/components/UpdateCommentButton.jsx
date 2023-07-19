import { useState, useEffect } from "react";
import "./reviews.css";

const BASE_URL = "http://localhost:8080";

export const UpdateCommentButton = (props) => {
  const [commentbody, setCommentBody] = useState("");
  const commentId = props.id;
  const userId = props.user


  useEffect(() => {
    if (props.filteredComment.length) {
      console.log(props.filteredComment, commentId);
      const singleUpdatedAllComments = props.filteredComment.find(
        (singleComment) => {
          if (singleComment.commentId === commentId) {
            return singleComment;
          }
        }
      );
      console.log(singleUpdatedAllComments);
      if (singleUpdatedAllComments) {
        setCommentBody(singleUpdatedAllComments.commentbody);
      }
    }
  }, [props.filteredComment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("enter the submit");
      const result = await sendPutRequest(commentId);
      console.log(result, "test");
    } catch (error) {
      console.log(error);
    }
  };

  const sendPutRequest = async (commentId) => {
    try {
      console.log("i am commment element", props.commentEl)
      const token = localStorage.getItem("token");
      console.log(props.reviewId);

      const updatedAllComment = props.filteredComment.filter(
        (singleComment) => {
          if (singleComment.commentId !== commentId) {
            return singleComment;
          }
        }
      );

      const response = await fetch(
        `${BASE_URL}/api/comments/update/${commentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            commentbody: commentbody,
            origReviewId: updatedAllComment[0].origReviewId,
            origUserId: userId,
          }),
        }
      );
      const result = await response.json();
      console.log(result);

     

      const newUpdatedAllComment = [...updatedAllComment, result];
      props.setFilteredComment(newUpdatedAllComment);

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
            value={commentbody}
            onChange={(e) => {
              // console.log(e.target.value);
              setCommentBody(e.target.value);
            }}
          ></input>
        </label>

        <button
          onSubmit={handleSubmit}
          type="submit"
          className="review-field-buttons submit"
        >
          Submit ➡
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentButton;
