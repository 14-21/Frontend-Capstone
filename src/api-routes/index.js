import { FaCommentSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import { LoginContext } from "../App";
// import jwtDecode from "jwt-decode";

const BASE_URL = "http://localhost:8080";

// REGISTER
export const registerUser = async (
  username,
  password,
  fname,
  lname,
  email,
  pic
) => {
  try {
    const response = await fetch(`${BASE_URL}/games/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          fname: fname,
          lname: lname,
          email: email,
          pic: pic,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

// Fetch User Data
export const fetchUserData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/games/get/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUserData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/games/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// User Reviews Methods
export const fetchReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/games/reviews`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/games/reviews`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewId: reviewId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

// Comment methods

export const fetchComments = async (origReviewId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games/users/comments/${origReviewId}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewGameId: reviewGameId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const deleteComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewGameId: reviewGameId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const updateComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewGameId: reviewGameId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};
