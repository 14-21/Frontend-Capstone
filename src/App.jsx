import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileComments from "./components/ProfileComments";
import AllReviews from "./components/AllReviews";
import Login from "./components/Login";
import Register from "./components/Register";
import Adventure from "./components/Adventure";
import Home from "./components/Home";
import SingleGame from "./components/SingleGame";
import BottomNav from "./components/BottomNav";

export const LoginContext = createContext();

const BASE_URL = "http://localhost:8080";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allGames, setAllGames] = useState([]);

  //Checking if user is logged in with token.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home allGames={allGames} setAllGames={setAllGames} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycomments" element={<ProfileComments />} />
          <Route path="/games" element={<AllReviews allGames={allGames} setAllGames={setAllGames} /> }/>
          <Route path="/games/:id" element={<SingleGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adventure" element={<Adventure allGames={allGames} setAllGames={setAllGames} />}/>
        </Routes>
      </LoginContext.Provider>
      <BottomNav />
    </>
  );
}

export default App;
