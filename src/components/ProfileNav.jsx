import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profileNav.css";

function ProfileNav() {
  return (
    <div>
      <Link to="/profile/user">
        <img className="picturelinktoprofile" href=""></img>
      </Link>
    </div>
  );
}

export default ProfileNav;
