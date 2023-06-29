import React from "react";
import { useState, useEffect } from "react";

function ProfileComments() {
  const [username, setUsername] = useState("");
  let [myReviews, setMyReviews] = useState([]);

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
