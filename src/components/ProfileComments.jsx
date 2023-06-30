import React from "react";
import { useState, useEffect } from "react";
import { userComments } from "../api-routes";
import { FaCommentSlash } from "react-icons/fa";

function ProfileComments() {
  const [username, setUsername] = useState("");
  let [myComments, setMyComments] = useState([]);

  //Fetching username so it can display on each user profile page.
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <>
      <h1>Your Comments</h1>
    </>
  );
}

export default ProfileComments;
