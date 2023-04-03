import { useState } from "react";
import "./SignUp.css";
import logo from "./logo_2.png";
import { useNavigate, Link } from "react-router-dom"

const SignUpPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
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

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
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
    <div className="SignUp">
      <div className="appTitle">
        <img className="logo" src={logo} alt="MozApp Logo"/>
        {/* <h2>MozApp</h2> */}
      </div>
      <h1>Sign up for free to start listening.</h1>

      <form id="signUpForm" onSubmit={handleSubmit}>
        <div className="input">
          <label for="username"> Username:</label>
          <input id="username" placeholder="Username" type="text" onChange={handleUsernameChange} value={username} />
        </div>
        <div className="input">
          <label for="password">Password: </label>
          <input id="password" placeholder="Password" type="password" onChange={handlePasswordChange} value={password} />
        </div>
        <div className="input">
          <label for="passwordConfirm">Confirm your password:</label>
          <input id="passwordConfirm" placeholder="Confirm Password" type="password" onChange={handleConfirmedPasswordChange} value={confirmedPassword} />
        </div>

        <input type="submit" value="Submit" />
      </form>

      <p>Already have an account? <Link to="../login"><p>Login</p></Link></p>
    </div>


  );
}

export default SignUpPage;