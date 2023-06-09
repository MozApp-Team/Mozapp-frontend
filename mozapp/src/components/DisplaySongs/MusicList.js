import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:8081/metadata')
      .then(response => {
        setMusicList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {musicList.map(music => (
          <li key={music.id}>{music.title} by {music.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
