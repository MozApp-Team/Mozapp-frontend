import React, {useEffect, useState} from "react";
import SongList from "./SongList";
import axios from "axios";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const StageSongList = () => 
{
    const [metadata, setMetadata] = useState([]); // Store the metadata
    const [setupAlreadyHappened, setSetupAlreadyHappened] = useState(false);
    
    const setSetupState = () => 
    {
      setSetupAlreadyHappened(true);
    };

    useEffect(() => 
    {
        const localSetupState = localStorage.getItem('setupState');
        if (localSetupState === 'true')
        {
        setSetupAlreadyHappened(true);
        }
    }, [setupAlreadyHappened]);

    // Use the useEffect hook to perform side effects
    useEffect(() => 
    {
        // Define an asynchronous function to fetch metadata
        const fetchMetadata = async () => 
        {
        try 
        {
            // Send a GET request to the server to fetch metadata
            const response = await axios.get('http://localhost:8081/metadata');
            // Update the metadata state variable with the response data
            setMetadata(response.data);
        } catch (error)
        {
            console.error(error);
        }
        };

        // Check if setup already happened
        if (setupAlreadyHappened) 
        {
        // If setup (directory, consumer key, consumer secret) already happened, call the fetchMetadata function
        fetchMetadata();
        }
    }, [setupAlreadyHappened]);

  return (
    <div>
    {setupAlreadyHappened ? 
    (
      <SongList metadata={metadata} />
    ) : 
    (
      <WelcomeScreen
        setAuthorizationCode={(code) => 
        {
          setSetupState(); // Update the setupAlreadyHappened state when authorization code is set
        }}
      />
    )}
  </div>
  )
}

export default StageSongList;