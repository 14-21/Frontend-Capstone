import "./navbar.css";
import { useContext } from "react";
import { LoginContext } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfileNav from "./ProfileNav";

function Navbar(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <>
      <div id="topbar-nav">
        <div id="nav-profile-split">
          <h1 className="website-name">
            Level Up
            <p className="website-name-sub">Gaming Reviews</p>
          </h1>
          <nav>
            {/* ADMIN NAV LINKS */}
            {isLoggedIn && props.isAdmin ? (
              <div className="topnav-link-bar">
                <Link className="top-nav links" to="/">
                  Home
                </Link>
                <Link className="links" to="/admin">
                  Admin Dashboard
                </Link>
                <Link className="links" to="/games">
                  All Games
                </Link>
                <button
                  id="logout-button"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
                    localStorage.removeItem("user"); //Removes user from local storage when logout is clicked.
                    navigate("/");
                  }}
                >
                  Logout
                </button>
                <ProfileNav />
              </div>
            ) : //NAVBAR FOR REGULAR USERS
            isLoggedIn ? (
              <div className="topnav-link-bar">
                {/* // This link is only showed when user is logged in. */}
                <Link className="top-nav links" to="/">
                  Home
                </Link>
                <Link className="links" to="/profile/user">
                  My Profile
                </Link>
                <Link className="links" to="/games">
                  All Games
                </Link>

                <button
                  id="logout-button"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
                    localStorage.removeItem("user"); //Removes user from local storage when logout is clicked.
                    navigate("/");
                  }}
                >
                  Logout
                </button>
                <ProfileNav />
              </div>
            ) : (
              <div className="topnav-link-bar">
                {/* // These links are showed when the user is logged out. */}
                <Link className="links" to="/">
                  Home
                </Link>

                <Link className="links" to="/games">
                  All Games
                </Link>

                <Link className="links" to="/login">
                  Login
                </Link>

                <Link className="links" to="/register">
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
        <div className="nav-underline"></div>
      </div>
    </>
  );
}

export default Navbar;
