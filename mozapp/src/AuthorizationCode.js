import React, { useState } from 'react';
import axios from 'axios';

const AuthorizationCode = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8081/', {
        code: code,
      });

      onSubmit(code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Enter Authorization Code</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthorizationCode;
