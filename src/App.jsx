import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileComments from "./components/ProfileComments";
import AllGames from "./components/AllGames";
import Login from "./components/Login";
import Register from "./components/Register";
import Adventure from "./components/Adventure";
import Action from "./components/Action";
import Survival from "./components/Survival";
import RPG from "./components/RPG";
import FPS from "./components/FPS";
import Simulation from "./components/Simulation";
import Sports from "./components/Sports";
import Strategy from "./components/Strategy";
import Racing from "./components/Racing";
import MMO from "./components/MMO";
import MOBA from "./components/MOBA";
import Horror from "./components/Horror";
import Home from "./components/Home";
import SingleGame from "./components/SingleGame";
import BottomNav from "./components/BottomNav";
import UserReviews from "./components/UserReviews";
import StarRating from "./components/StarRating";
import Admin from "./components/Admin";
import jwtDecode from "jwt-decode";
export const LoginContext = createContext();

const BASE_URL = "http://localhost:8080";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const [allGames, setAllGames] = useState([]);

  // Checking if & who is logged in with token.
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwtDecode(localStorage.getItem("token"));
      setIsLoggedIn({
        username: decodedToken.username,
      });
    }
  }, []);

  // Fetching allAdmins && admin status
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const response = await fetch(`${BASE_URL}/adminusers`);
        const result = await response.json();
        //logging all admin objects
        console.log(result);
        //Filtering thru allAdmins to match username to isLoggedIn.username
        const filteredAdmin = result.find((e) => {
          if (e.username === isLoggedIn) {
            return true;
          } else {
            console.log(e.username, "Username do not match");
          }

          console.log(isLoggedIn);
        });
        //If isLoggedIn.username matches filteredAdmin -- setting admin state.
        if (isLoggedIn && filteredAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          console.log(isLoggedIn);
          console.log(isAdmin);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAdmins();
  }, [isLoggedIn]);

  // Fetching all games data
  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(`${BASE_URL}/games`);
        const result = await response.json();
        setAllGames(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGames();
  }, []);

  return (
    <>
      {/* Giving access to login info to all components */}
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar isAdmin={isAdmin} />
        <div id="main-body">
          <Routes>
            <Route
              path="/"
              element={<Home allGames={allGames} setAllGames={setAllGames} />}
            />
            <Route path="/profile/user" element={<Profile />} />
            <Route path="/star" element={<StarRating />} />
            <Route
              path="/myreviews"
              element={<UserReviews allGames={allGames} />}
            />
            <Route path="/mycomments" element={<ProfileComments />} />
            <Route
              path="/games"
              element={
                <AllGames allGames={allGames} setAllGames={setAllGames} />
              }
            />
            <Route
              path="/games/:id"
              element={<SingleGame allGames={allGames} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/admin"
              element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
            />

            <Route
              path="/adventure"
              element={<Adventure allGames={allGames} />}
            />
            <Route path="/action" element={<Action allGames={allGames} />} />
            <Route
              path="/survival"
              element={<Survival allGames={allGames} />}
            />
            <Route path="/rpg" element={<RPG allGames={allGames} />} />
            <Route path="/horror" element={<Horror allGames={allGames} />} />
            <Route path="/fps" element={<FPS allGames={allGames} />} />
            <Route
              path="/simulation"
              element={<Simulation allGames={allGames} />}
            />
            <Route path="/sports" element={<Sports allGames={allGames} />} />
            <Route
              path="/stragety"
              element={<Strategy allGames={allGames} />}
            />
            <Route path="/racing" element={<Racing allGames={allGames} />} />
            <Route path="/mmo" element={<MMO allGames={allGames} />} />
            <Route path="/moba" element={<MOBA allGames={allGames} />} />
          </Routes>
        </div>
      </LoginContext.Provider>
      <BottomNav />
    </>
  );
}

export default App;
