import React, { useState } from 'react';
import './SongList.css';

const SongList = ({ metadata }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handlePlayButtonClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="song-list-container">
      <h1>Song List</h1>
      <div className="song-table">
        {metadata.map((song) => (
          <div key={song.id} className="song-row">
            <div className="album-art">
              <button onClick={() => handlePlayButtonClick(song)}><img src={song.cover_image} alt={song.title} /></button>
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
      {selectedSong && (
        <div className="music-player">
          <h2>Now Playing: {selectedSong.title}</h2>
          <audio controls autoPlay src={`http://localhost:8081/music/${selectedSong.album}/${selectedSong.title}.mp3`}></audio>
        </div>
      )}
    </div>
  );
};

export default SongList;
