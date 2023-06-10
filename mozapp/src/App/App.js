// Import necessary dependencies and components from React and other modules
import React, { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import SongList from '../components/DisplaySongs/SongList';
import axios from 'axios';

// Define the App component
const App = () => {
  const setSetupState = () => {
    setSetupAlreadyHappened(true);
  };

  // Define state variables using the useState hook
  const [metadata, setMetadata] = useState([]); // Store the metadata
  const [setupAlreadyHappened, setSetupAlreadyHappened] = useState(false);

  useEffect(() => {
    const localSetupState = localStorage.getItem('setupState');
    if (localSetupState === 'true')
    {
      setSetupAlreadyHappened(true);
      console.log("Successfully retrieved local value");
    }
  }, [setupAlreadyHappened]);

  // Use the useEffect hook to perform side effects
  useEffect(() => {
    // Define an asynchronous function to fetch metadata
    const fetchMetadata = async () => {
      try {
        // Send a GET request to the server to fetch metadata
        const response = await axios.get('http://localhost:8081/metadata');
        // Update the metadata state variable with the response data
        setMetadata(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Check if setup already happened
    if (setupAlreadyHappened) {
      // If setup (directory, consumer key, consumer secret) already happened, call the fetchMetadata function
      fetchMetadata();
    }
  }, [setupAlreadyHappened]);

  // Render the component
  return (
    <div>
      {setupAlreadyHappened ? (
        <SongList metadata={metadata} />
      ) : (
        <WelcomeScreen
          setAuthorizationCode={(code) => {
            setSetupState(); // Update the setupAlreadyHappened state when authorization code is set
          }}
        />
      )}
    </div>
  );
};

// Export the App component as the default export
export default App;
