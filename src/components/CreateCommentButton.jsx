import React, { useState, useEffect } from "react";
import "./createCommentButton.css";
import "./reviews.css";

const BASE_URL = "http://localhost:8080";

function CreateCommentButton(props) {
  const [commentbody, setCommentBody] = useState("");
  const [user, setUser] = useState("");


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // console.log(user);
      setUser(JSON.parse(user));
    }
  }, []);

  // submit function passed in OnSubmit in form below.
  const handleSubmit = async (e) => {
    e.preventDefault();

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
          origReviewId: props.reviewId,
        }),
      });
      // Outside of fetch starting here.
      const result = await response.json();
      // console.log("results", result)
      // console.log("callback", props)
      if(props.filteredComment.length) {
        props.setFilteredComment([...props.filteredComment, result.data[0]])

      } else {
        props.setFilteredComment([result.data[0]])
      }
     
    

      setCommentBody("");

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="new comment"></label>
        <input
          id="review-body"
          name="commentbody"
          type="text"
          placeholder="Leave a comment."
          value={commentbody}
          onChange={(e) => {
            console.log(e.target.value);
            setCommentBody(e.target.value);
          }}
        />

        <button className="button-reviews" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CreateCommentButton;
