import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './SongList.css';
import ResetButton from "./ResetButton"

const SongList = ({ metadata }) => 
{
  const [selectedSong, setSelectedSong] = useState(null);
  const [songsPlayed, setSongsPlayed] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handlePlayButtonClick = (song) => 
  {
    setSelectedSong(song);
    setSongsPlayed((prevSongs) => [...prevSongs, song]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const onClickNext = () => 
  {
    const randomIndex = Math.floor(Math.random() * metadata.length);
    const randomSong = metadata[randomIndex];
    setSelectedSong(randomSong);
    setSongsPlayed((prevSongs) => [...prevSongs, randomSong]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const onClickPrevious = () => 
  {
    if (currentIndex > 0) 
    {
      const previousIndex = currentIndex - 1;
      const previousSong = songsPlayed[previousIndex];
      setSelectedSong(previousSong);
      setCurrentIndex(previousIndex);
    }
  };

  const handleEnded = () =>
  {
    const randomIndex = Math.floor(Math.random() * metadata.length);
    const randomSong = metadata[randomIndex];
    setSelectedSong(randomSong);
    setSongsPlayed((prevSongs) => [...prevSongs, randomSong]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div className="song-list-container">
      <h1>Song List</h1>
      <div className="song-table-container">
        {metadata.map((song) => 
        (
          <div key={song.id} className="song-row">
            <div className="album-art">
              <button onClick={() => handlePlayButtonClick(song)}>
                <img src={song.cover_image} alt={song.title} />
              </button>
            </div>
            <div className="song-info">
              <h3>{song.title}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Artist:</strong>
                    </td>
                    <td>{song.artist}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Album:</strong>
                    </td>
                    <td>{song.album}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Genre:</strong>
                    </td>
                    <td>{song.genre}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Year:</strong>
                    </td>
                    <td>{song.release_year}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Format:</strong>
                    </td>
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
          <AudioPlayer
            autoPlay
            src={`http://localhost:8081/music/${selectedSong.album}/${selectedSong.title}.mp3`}
            showSkipControls={true}
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
            onEnded={handleEnded}
          />
        </div>
      )}
      <div className="reset-button-container">
        <ResetButton />
      </div>
    </div>
  );
};

export default SongList;
