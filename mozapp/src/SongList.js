import React from 'react';

const SongList = ({ metadata }) => {
  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {metadata.map((song) => (
          <li key={song.title}>
            <div>
              <img src={song.cover_image} alt={song.title} />
            </div>
            <div>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <p>{song.album}</p>
              <p>{song.genre}</p>
              <p>{song.release_year}</p>
              <p>{song.format}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
