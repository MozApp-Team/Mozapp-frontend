import React, {useState} from 'react';
import axios from 'axios';
import './AuthorizationCode.css';

const AuthorizationCode = ({ onSubmit }) => 
{
  // Define state variable using useState hook
  const [code, setCode] = useState('');
  const [skipSetup, setSkipSetup] = useState('');

  // Handle form submission
  const handleFormSubmit = async (e) => 
  {
    e.preventDefault();

    try 
    {
      // Send a POST request to the backend with the entered code
      await axios.post('http://127.0.0.1:8081/', 
      {
        code: code,
      });

      // Call the onSubmit function with the entered code
      onSubmit(code);
    } catch (error) 
    {
      console.error(error);
    }
  };

  const setSetupState = () => 
  {
    setSkipSetup(true)
    localStorage.setItem('setupState', 'true')
  }

  return (
    <div>
      {/* Heading */}
      <h1>Enter Authorization Code</h1>
      {/* Form */}
      <form onSubmit={handleFormSubmit}>
        {/* Code input */}
        <label>
          Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit" onClick={() => setSetupState()}>Submit</button>
      </form>
    </div>
  );
};

export default AuthorizationCode;
