import "./register.css";
import { useState, useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const BASE_URL = "http://localhost:8080";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null)
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
      //Prevents the page from doing a hard refresh.
       e.preventDefault();
        try {
          const response = await fetch(`${BASE_URL}/games/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // user:{
                username: username,
                password: password,
                // },
            }),
          });
          const result = await response.json();
      
          console.log(result)
          if(result) {
      
            //Normally store the non-decryted JWT into localstorage first.
            localStorage.setItem("token", result.token)
            const decodedToken = await jwtDecode(result.token);
      
            // console.log(decodedToken)
      
            let stringifiedObj = JSON.stringify(decodedToken);
            localStorage.setItem("user", stringifiedObj);
            // localStorage.setItem("is_admin", is_admin)
            
            setIsLoggedIn(decodedToken)
            setLoginError(null)  

            navigate("/"); //Navigates back to Homepage after login.
          } else if (
            result.error
          ){

            setLoginError(result.error.message)
          }
          
        } catch (error) {
          console.log(error);
        }
    }


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
      {loginError ? <p>{loginError}</p> : null}
    </div>
  );
}


export default Login;
