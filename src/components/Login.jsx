import "./register.css";
import { loginUser } from "../api-routes";
import { useState, useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);

    try {
      const result = await loginUser(username, password);
      console.log(result);

      // Fetching only key-value pair for the token for the login.
      localStorage.setItem("token", result.token); // Potentially needs to be changed.
      localStorage.setItem("id", result.id); // Can be deleted later - for testing purposes.

      setIsLoggedIn(true); // Telling program login is true.

      navigate("/"); //Navigates back to Homepage after login.
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login-container">
      <h1 id="registerheader">LOGIN</h1>
      <form id="registerform" onSubmit={handleSubmit}>
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

export default Login;
