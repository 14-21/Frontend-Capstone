import { useState } from "react";
import StarRating from "./StarRating";
import UpdateReviewsButton from "./UpdateReviewsButton";
import DeleteReviewButton from "./DeleteReviewButton";
import "./reviews.css";

function UserReviewLocalEdit(props) {
  const reviewEl = props.reviewEl;
  const user = props.user;
  const filteredReview = props.filteredReview;
  const setFilteredReview = props.setFilteredReview;
  const [toggleEdit, setToggleEdit] = useState(false);
  console.log(reviewEl);
  return (
    <div>
      {toggleEdit ? (
        <>
          <h2 className="user-gametitle">{reviewEl.reviewGameId}</h2>
          <p className="user-review-paragraph" id="review-user">
            {reviewEl.reviewbody}
          </p>
          <StarRating
            userscore={reviewEl.userscore}
            gameId={reviewEl.reviewGameId}
          />
        </>
      ) : (
        <>
          <UpdateReviewsButton
            id={reviewEl.reviewId}
            filteredReview={filteredReview}
            setFilteredReview={setFilteredReview}
            user={user.id}
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
        <DeleteReviewButton
          id={reviewEl.reviewId}
          filteredReview={filteredReview}
          setFilteredReview={setFilteredReview}
        />
      </div>
    </div>
  );
}

export default UserReviewLocalEdit;
