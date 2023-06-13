// Collect username, apssword, hash it, post request username and hashed password to backend. Salt hash. When user enters password, hash it and send to backend. If sent password matches with salt, then let user through. If not, print error in front end.
import React, {useEffect, useState} from "react";
import bcrypt from 'bcryptjs';
import "./UserRegister.css"
import UserLogin from "./UserLogin";
import axios from "axios";

const UserAuth = () =>
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    
    useEffect(() => 
    {
        console.log("I AM RUNNING!!!")
        checkAccountsDB();
    }, []);

    const checkAccountsDB = () => 
    {
        fetch('http://localhost:8081/checkregister', {
          method: 'GET'
        })
          .then(response => response.json()) // Parse the response as JSON
          .then(data => {
            console.log("RESPONSE SUCCESS " + data.message); // Access the 'message' property from the data object
            if (data.message === '200') {
              setShowLogin(true);
            }
          })
          .catch(error => {
            console.error("RESPONSE ERROR", error);
          });
    }

    const handleUsernamePassword = async (e) => 
    {
        e.preventDefault();

        const hashedPassword = bcrypt.hashSync(password, 10);

        try 
        {
        // Send a POST request to the backend
        const response = await axios.post('http://localhost:8081/register', 
        {
          username: username,
          password: hashedPassword
        });
  
        const {link} = response.data;
        setShowLogin(true);
        } catch (error) 
        {
        console.error(error);
        }
        checkAccountsDB();
    };

    return (
        <div>
            {showLogin ? (
                <UserLogin />
            ) : (
                <form onSubmit={handleUsernamePassword}>
                    <label>Welcome to MozApp!</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
            )
        }
        </div>
    )
};

export default UserAuth;