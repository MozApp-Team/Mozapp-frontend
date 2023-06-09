import React, { useState } from 'react';
import axios from 'axios';
import AuthorizationCode from './AuthorizationCode';

const WelcomeScreen = ({ setAuthorizationCode }) => {
  const [songDirectory, setSongDirectory] = useState('');
  const [consumerKey, setConsumerKey] = useState('');
  const [consumerSecret, setConsumerSecret] = useState('');
  const [authorizationLink, setAuthorizationLink] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/', {
        song_directory: songDirectory,
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
      });

      const { link } = response.data;
      setAuthorizationLink(link);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthorizationCode = (code) => {
    setAuthorizationCode(code);
  };

  return (
    <div>
      <h1>Welcome to MozApp!</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Song Directory:
          <input
            type="text"
            value={songDirectory}
            onChange={(e) => setSongDirectory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Consumer Key:
          <input
            type="text"
            value={consumerKey}
            onChange={(e) => setConsumerKey(e.target.value)}
          />
        </label>
        <br />
        <label>
          Consumer Secret:
          <input
            type="text"
            value={consumerSecret}
            onChange={(e) => setConsumerSecret(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {authorizationLink && (
        <div>
          <p>Authorization Link:</p>
          <a href={authorizationLink}>{authorizationLink}</a>
          <AuthorizationCode onSubmit={handleAuthorizationCode} />
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
