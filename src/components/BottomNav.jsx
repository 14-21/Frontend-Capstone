import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./bottomNav.css";

function BottomNav() {
  return (
    <div className="bottomNav-main-container">
      <h2 className="bottomNav-h2">Follow Us</h2>
      <div className="social-container">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/jamesqquick"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="links-container">
        <Link className="bottomNav-Link" to="/home">
          Home
        </Link>
        <Link className="bottomNav-Link" to="/profile">
          Profile
        </Link>
        <Link className="bottomNav-Link" to="/about">
          About
        </Link>
      </div>
      <h3 className="bottomNav-h3">Established 2023</h3>
    </div>
  );
}

export default BottomNav;
