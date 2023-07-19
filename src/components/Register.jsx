import "./register.css";
import { useState, useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


const BASE_URL = "http://localhost:8080";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  // submit function passed in OnSubmit in form below.
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    try {
      const response = await fetch(`${BASE_URL}/games/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          username: username,
          password: password,
          email: email,
        }),
      }); 
      const result = await response.json();
      console.log(result);

      if (result) {
        //Normally store the non-decryted JWT into localstorage first.
        localStorage.setItem("token", result.data.newJWTToken);
        const decodedToken = await jwtDecode(result.data.newJWTToken);

        console.log(decodedToken);

        let stringifiedObj = JSON.stringify(decodedToken);
        localStorage.setItem("user", stringifiedObj);

        setIsLoggedIn(true);
        setLoginError(null);
        console.log(isLoggedIn);

      } else if (result.error) {
        setLoginError(result.error.message);
      }

      setFname("")
      setLname("")
      setEmail("")
      setUsername("")
      setPassword("")

      navigate("/"); //Navigates back to Homepage after register.
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div id="register-container">
      <h1 id="registerheader">Sign Up</h1>

      <form id="registerform" onSubmit={handleSubmit}>
        <label className="labels">
          <input
            className="register-inputs"
            type="text"
            value={fname}
            placeholder="First Name"
            onChange={(e) => {
              console.log(e.target.value);
              setFname(e.target.value);
            }}
          />
        </label>

        <label className="labels">
          <input
            className="register-inputs"
            type="text"
            value={lname}
            placeholder="Last Name"
            onChange={(e) => {
              console.log(e.target.value);
              setLname(e.target.value);
            }}
          />
        </label>

        <label className="labels">
          <input
            className="register-inputs"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </label>

        <label className="labels">
          <input
            className="register-inputs"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />
        </label>

        <label className="labels">
          <input
            className="register-inputs"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </label>


        <button id="registerbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
