// Import React and useState from the 'react' module
import React, { useState } from 'react';
// Import the CSS file for styling
import './SongList.css';

// Define the SongList component
const SongList = ({ metadata }) => {
  // Define a state variable to store the selected song
  const [selectedSong, setSelectedSong] = useState(null); // useState variable returns selectedSong and setSelectedSong function that updates selectedSong

  // Event handler for the play button click
  const handlePlayButtonClick = (song) => { // handlePlayButtonClick is a variable that contains a function with parameter song that is passed in
    // Set the selected song in the state
    setSelectedSong(song);
  };

  // Render the component
  return (
    <div className="song-list-container">
      {/* Heading for the song list */}
      <h1>Song List</h1>
      <div className="song-table">
        {/* Iterate over the metadata array and render each song */}
        {metadata.map((song) => (
          <div key={song.id} className="song-row">
            <div className="album-art">
              {/* Play button for each song */}
              <button onClick={() => handlePlayButtonClick(song)}>
                <img src={song.cover_image} alt={song.title} />
              </button>
            </div>
            <div className="song-info">
              <h3>{song.title}</h3>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Artist:</strong></td>
                    <td>{song.artist}</td>
                  </tr>
                  <tr>
                    <td><strong>Album:</strong></td>
                    <td>{song.album}</td>
                  </tr>
                  <tr>
                    <td><strong>Genre:</strong></td>
                    <td>{song.genre}</td>
                  </tr>
                  <tr>
                    <td><strong>Year:</strong></td>
                    <td>{song.release_year}</td>
                  </tr>
                  <tr>
                    <td><strong>Format:</strong></td>
                    <td>{song.format}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      {/* Render the music player if a song is selected, meaning selectedSong is true/exists*/}
      {selectedSong && ( 
        <div className="music-player">
          <h2>Now Playing: {selectedSong.title}</h2>
          {/* Audio player for the selected song */}
          <audio controls autoPlay src={`http://localhost:8081/music/${selectedSong.album}/${selectedSong.title}.mp3`}></audio>
        </div>
      )}
    </div>
  );
};

// Export the SongList component as the default export
export default SongList;
