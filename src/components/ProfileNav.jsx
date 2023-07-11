import React from "react";
import { Link } from "react-router-dom";
import "./profileNav.css";

function ProfileNav() {
  return (
    <div>
      <Link to="/profile/user/:username">
        <img className="picturelinktoprofile"></img>
      </Link>
    </div>
  );
}

export default ProfileNav;
