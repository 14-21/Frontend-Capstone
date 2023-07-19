import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api-routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateCommentButton from "./CreateCommentButton";
import "./reviews.css";
import "./comments.css";
import "./profile.css";
import UserCommentLocalEdit from "./UserCommentLocalEdit";

function Comments(props) {
  const [filteredComment, setFilteredComment] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const renderComment = await fetchComments(props.reviewId);
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
        //reviewId is props.
        if (e.origReviewId == props.reviewId) {
          return true;
        } else {
          return false;
        }
      });
      console.log(filteredComment);
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
          return (
            <div>
              <p className="review-paragraph" id="comment-user">
                {commentEl.commentbody}
              </p>
              <div className="border-line"></div>
            </div>
          );
        })
      ) : (
        <p>No Comments Yet</p>
      )}

      <CreateCommentButton
        filteredComment={filteredComment}
        setFilteredComment={setFilteredComment}
        reviewId={props.reviewId}
      />
    </div>
  );
}

export default Comments;
