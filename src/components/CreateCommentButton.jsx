import React, { useState, useEffect } from "react";
import "./deleteReviewButton.css";
import "./createCommentButton.css";
import "./reviews.css";

const BASE_URL = "http://localhost:8080";


function CreateCommentButton(props) {
  const [commentbody, setCommentBody] = useState("");
  const [user, setUser] = useState("")


  // Pulling local storage for userId
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // console.log(user);
      setUser(JSON.parse(user));
    }
  }, []);


  // submit function passed in OnSubmit in form below.
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await createComment();

    } catch (error) {
      console.log(error);
    }
  };

  async function createComment() {
    try {
  
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await fetch(`${BASE_URL}/api/review/post/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          commentbody: commentbody,
          origUserId: user.id,
          origReviewId: props.reviewId
        }),
      });
      // Outside of fetch starting here.
      const result = await response.json();

      const filteredCommentCopy = [...props.filteredComment];
      filteredCommentCopy.unshift(result);

      props.setFilteredComment(filteredCommentCopy);
      console.log(filteredCommentCopy);

      setCommentBody("");
   
      console.log(result);
  
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new comment"></label>
        <input
          id="comment body"
          name="commentbody"
          type="text"
          placeholder="Leave a comment."
          value={commentbody}
          onChange={(e) => {
            console.log(e.target.value)
            setCommentBody(e.target.value);
          }}
        />

        <button className="button-comments" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CreateCommentButton;
