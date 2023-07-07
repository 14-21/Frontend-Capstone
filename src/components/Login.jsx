import './login.css';
import { loginUser } from "../api-routes"
import { useState, useContext } from "react";
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setIsLoggedIn} = useContext(LoginContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      //Prevents the page from doing a hard refresh.
        e.preventDefault();
        console.log(username);

        try {
            const result = await loginUser(username, password);
            console.log(result) 

            // Fetching only key-value pair for the token for the login.
            // localStorage.setItem("token", result.token); // Potentially needs to be changed.
            
            setIsLoggedIn(true)  // Telling program login is true.

            navigate('/') //Navigates back to Homepage after login.
        } catch (error) {
            console.log(error);
        }
    }
    


    return (
        <div id="login-container">
        <h1 id="loginheader">LOGIN</h1>
        <form id="loginform" onSubmit={handleSubmit}>
          <label className="labels">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => {
                console.log(e.target.value);
                setUsername(e.target.value);
              }}
            />
          </label>
  
          <label className="labels">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }}
            />
          </label>
          <button id="loginbutton" type="submit">Submit</button>
        </form>
      </div>
    )

}

export default Login;