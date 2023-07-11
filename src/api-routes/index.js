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

// LOGIN
// export const loginUser = async (username, password) => {

//    try {
//     // const { setIsLoggedIn } = useContext(LoginContext);

//     const response = await fetch(`${BASE_URL}/games/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           username: username,
//           password: password,
//       }),
//     });
//     const result = await response.json();

//     if(result.data) {

//       //Normally store the non-decryted JWT into localstorage first.
//       localStorage.setItem("token", result.data)
//       const decodedToken = await jwtDecode(result.data);

//       // console.log(decodedToken)

//       // let stringifiedObj = JSON.stringify(decodedToken);
//       // localStorage.setItem("user", stringifiedObj);
//       setIsLoggedIn(decodedToken)

//     } else {
//       alert("Failed to login, please try agian.")
//     }

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };

// Fetch User Data
export const fetchUserData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/users`);
    const result = await response.json();
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

export const createNewReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/games/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewbody: reviewbody,
        userscore: userscore,
        reviewUserId: reviewUserId,
        reviewGameId: reviewGameId,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const deleteReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/games/reviews`, {
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

export const updateReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/games/reviews`, {
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

// Comment methods
// export const createComment = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };

// export const deleteComments = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };

// export const updateComments = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };
