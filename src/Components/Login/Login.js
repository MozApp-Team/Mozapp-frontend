import { useState } from "react";
import "./Login.css";
import logo from "./logo_2.png";
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  let navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidForm) {
      navigate("../");
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    verifyForm();
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    verifyForm();
  }

  const verifyForm = () => {
    if (username && password) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }



  return (
    <div className="Login">
      <div className="appTitle">
        <img className="logo" src={logo} alt="MozApp Logo"/>
        {/* <h2>MozApp</h2> */}
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input">
          <label for="username"> Username:</label>
          <input id="username" placeholder="Username" type="text" onChange={handleUsernameChange} value={username} />
        </div>
        <div className="input">
          <label for="password">Password: </label>
          <input id="password" placeholder="Password" type="password" onChange={handlePasswordChange} value={password} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>


  );
}

export default Login;