import React, { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import SongList from '../components/DisplaySongs/SongList';
import axios from 'axios';

const App = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get('http://localhost:8081/metadata');
        setMetadata(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (authorizationCode) {
      fetchMetadata();
    }
  }, [authorizationCode]);

  return (
    <div>
      {authorizationCode ? (
        <SongList metadata={metadata} />
      ) : (
        <WelcomeScreen setAuthorizationCode={setAuthorizationCode} />
      )}
    </div>
  );
};

export default App;
