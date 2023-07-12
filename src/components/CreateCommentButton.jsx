import React, { useState } from "react";
import { createComment } from "../api-routes";
import "./deleteReviewButton.css";
import "./createCommentButton.css"

function CreateCommentButton() {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    const response = createComment();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="title"></label>
        <input
          id="comment-body"
          name="commentbody"
          type="text"
          placeholder="What did you think of the game"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        ></input>
        <button className="button-comments" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CreateCommentButton;
