import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api-routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StarRating";
import CreateCommentButton from "./CreateCommentButton";
import "./reviews.css";
import "./comments.css";

function Comments() {
  const [comment, setComment] = useState([]);
  const [filteredComment, setFilteredComment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      try {
        const renderComment = await fetchComments();
        console.log(renderComment);
        setComment(renderComment);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  useEffect(() => {
    if (comment.length) {
      const foundComment = comment.filter((e) => {
        if (e.commentGameId == id) {
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
  }, [comment]);

  return (
    <div className="comment-card">
      <div className="title-center"></div>
      {/* {filteredComment && filteredComment.length ? (
        filteredComment.map((commentEl) => {
          console.log(commentEl); */}
      {/* return ( */}
      <div>
        {/* <CreateCommentButton />
        <p className="comment-paragraph" id="comment-user">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          laboriosam, fuga et itaque minus nam sapiente possimus ab quisquam at
          quo praesentium sint quam magnam. Quos sint nihil repudiandae natus.
        </p> */}
      </div>
      {/* ); */}
      {/* })
      ) : (
        <p>...Loading</p>
      )} */}
    </div>
  );
}

export default Comments;
