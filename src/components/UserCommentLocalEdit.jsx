import { useState } from "react";
import UpdateCommentButton from "./UpdateCommentButton";
import DeleteComment from "./DeleteComment";
import "./reviews.css";

function UserCommentLocalEdit(props) {
  const commentEl = props.commentEl;
  const user = props.commentEl.origUserId;
  const filteredComment = props.filteredComment;
  const setFilteredComment = props.setFilteredComment;
  const [toggleEdit, setToggleEdit] = useState(true);
  console.log("commentEl", commentEl)
 

  return (
    <div>
      {toggleEdit ? (
        <>
          <h2 className="user-gametitle">{commentEl.commentId}</h2>
          <p className="user-review-paragraph" id="review-user">
            {commentEl.commentbody}
          </p>
        </>
      ) : (
        <>
          <UpdateCommentButton
            id={commentEl.commentId}
            reviewId={commentEl.origReviewId}
            filteredComment={props.filteredComment}
            setFilteredComment={props.setFilteredComment}
            user={user}
          />
        </>
      )}
      <div className="buttons-align">
        <button
          className="button-edit"
          onClick={() => {
            setToggleEdit(!toggleEdit);
          }}
        >
          Edit ➡
        </button>
        <DeleteComment
          id={commentEl.commentId}
          filteredComment={props.filteredComment}
          setFilteredComment={props.setFilteredComment}
        />
      </div>
    </div>
  );
}

export default UserCommentLocalEdit;
