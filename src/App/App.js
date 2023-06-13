// Import necessary dependencies and components from React and other modules
import React, {useState, useEffect} from 'react';
import UserRegister from '../components/UserAuth/UserRegister';

// Define the App component
const App = () => 
{

  // Run UserRegister, which will then run StageSongList, which will run WelcomeScreen, if setupState is true, don't run WelcomeScreen, and go to SongList.


  // Render the component
  return (
    <UserRegister />
  );
};

// Export the App component as the default export
export default App;
