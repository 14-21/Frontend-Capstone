import "./profile.css";
import "../index.css";
import { LoginContext } from "../App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { fetchUserData } from "../api-routes";
import { Link } from "react-router-dom";

function AdminUsers() {
  return (
    <>
      <div className="profile-nav">
        <ul>
          <li>
            <Link to="/admin">Games</Link>
          </li>
          <li>
            {" "}
            <Link to="/creategame">Create Game</Link>
          </li>
          <li>
            {" "}
            <Link to="/adminusers">All Users</Link>
          </li>
        </ul>
        <div className="border-line"></div>
        <div></div>
      </div>
    </>
  );
}

export default AdminUsers;
