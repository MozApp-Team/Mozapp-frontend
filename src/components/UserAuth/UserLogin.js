import React, { useState } from 'react';
import axios from 'axios';
import StageSongList from '../DisplaySongs/StageSongList';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/attemptlogin', {
        username: username,
        password: password
      });

      console.log(response.data);
      console.log("AUTH RESPONSE", response.data)

      // Assuming the response contains a property indicating successful login
      if (response.data.message == '200') {
        console.log("I RAN AUTH SUCCESSFUL")
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <StageSongList />
      )}
    </div>
  );
};

export default Login;
