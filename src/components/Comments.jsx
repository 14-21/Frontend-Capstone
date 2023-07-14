import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api-routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StarRating";
import CreateCommentButton from "./CreateCommentButton";
import "./reviews.css";
import "./comments.css";

function Comments({reviewId}) {
  // const [comment, setComment] = useState([]);
  const [filteredComment, setFilteredComment] = useState([]);



  useEffect(() => {
    const getComments = async () => {
      try {
        const renderComment = await fetchComments(reviewId);
        console.log(renderComment);
        setFilteredComment(renderComment);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);



  useEffect(() => {
    if (filteredComment) {
      const foundComment = filteredComment.filter((e) => {
        if (e.origReviewId == props.reviewId) {
          return true;
        } else {
          return false;
        }
      });

      if (foundComment) {
        setFilteredComment(foundComment);
      } else {
        setFilteredComment([]);
      }
    }
  }, []);

  return (
    <div className="comment-card">
      <div className="title-center"></div>
      {filteredComment && filteredComment.length ? (
        filteredComment.map((commentEl) => {
          console.log(commentEl); 
            return ( 
               <div>
        {/* <CreateCommentButton /> */}
        <p className="comment-paragraph" id="comment-user">
            {commentEl.commentbody}
        </p>
      </div>
       ); 
       })
      ) : (
        <p>No Comments Yet</p>
      )}
    </div>
  );
}

export default Comments;
