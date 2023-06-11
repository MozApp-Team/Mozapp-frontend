import React, {useState} from 'react';
import axios from 'axios';
import AuthorizationCode from '../WelcomeScreenCode/AuthorizationCode';
import './WelcomeScreen.css';

const WelcomeScreen = ({setAuthorizationCode}) => 
{
  // Define state variables using useState hook
  const [songDirectory, setSongDirectory] = useState('');
  const [consumerKey, setConsumerKey] = useState('');
  const [consumerSecret, setConsumerSecret] = useState('');
  const [authorizationLink, setAuthorizationLink] = useState('');

  // Handle form submission
  const handleFormSubmit = async (e) => 
  {
    e.preventDefault();

    try 
    {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:8081/', 
      {
        song_directory: songDirectory,
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
      });

      const {link} = response.data;
      setAuthorizationLink(link);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle authorization code
  const handleAuthorizationCode = (code) => 
  {
    setAuthorizationCode(code);
  };

  return (
    <div class="container">
      {/* Heading */}
      <h1>Welcome to MozApp!</h1>
      {/* Form */}
      <form onSubmit={handleFormSubmit}>
        {/* Song Directory input */}
        <label>
          Song Directory:
          <input
            type="text"
            value={songDirectory}
            onChange={(e) => setSongDirectory(e.target.value)}
          />
        </label>
        <br />
        {/* Consumer Key input */}
        <label>
          Consumer Key:
          <input
            type="text"
            value={consumerKey}
            onChange={(e) => setConsumerKey(e.target.value)}
          />
        </label>
        <br />
        {/* Consumer Secret input */}
        <label>
          Consumer Secret:
          <input
            type="text"
            value={consumerSecret}
            onChange={(e) => setConsumerSecret(e.target.value)}
          />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      {/* Authorization Link section */}
      {authorizationLink && (
        <div>
          <p>Authorization Link:</p>
          {/* Link */}
          <a href={authorizationLink}>{authorizationLink}</a>
          {/* AuthorizationCode component */}
          <AuthorizationCode onSubmit={handleAuthorizationCode} />
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
