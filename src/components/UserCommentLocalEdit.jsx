import { useState } from "react";
import UpdateCommentButton from "./UpdateCommentButton";
import DeleteComment from "./DeleteComment";
import "./reviews.css";

function UserCommentLocalEdit(props) {
  const commentEl = props.commentEl;
  const user = props.user;
  const filteredComment = props.filteredComment;
  const setFilteredComment = props.setFilteredComment;
  const [toggleEdit, setToggleEdit] = useState(false);

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
            filteredComment={filteredComment}
            setFilteredComment={setFilteredComment}
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
          filteredComment={filteredComment}
          setFilteredComment={setFilteredComment}
        />
      </div>
    </div>
  );
}

export default UserCommentLocalEdit;
