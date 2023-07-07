import "./register.css";
import { registerUser } from "../api-routes";
import { useState, useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  // submit function passed in OnSubmit in form below.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    try {
      const result = await registerUser(
        username,
        password,
        fname,
        lname,
        email,
        pic
      ); // Passing async function in from below.
      console.log(result);

      //Need to verfiy token is being stored once we have our API.
      localStorage.setItem("token", result.token); // Storing only key-value pair for token.
      localStorage.setItem("user", result.user.username); // Can delete later - for testing purposes.
      setIsLoggedIn(true); // Telling program login is true.

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

        <label className="labels">
          Profile Picture:
          <input
            className="register-inputs"
            type="file"
            value={pic}
            accept="image/*"
            onChange={(e) => {
              console.log(e.target.value);
              setPic(e.target.value);
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
