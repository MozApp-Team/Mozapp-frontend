import "./Home.css";
import AddFolder from "./AddFolder/AddFolder";
import AlbumList from "../AlbumList/AlbumList";
import { Link } from "react-router-dom";
import { useState } from "react";

let musicFoldersTemp = [
  {
    "albums": [
      {
        "album_name": "Symphony No. 5",
        "artist": "Beethoven",
        "album_art_path": "/path/to/album/art/symphony5.jpg",
        "id": 1,
        "songs": [
          {
            "song_name": "Allegro con brio",
            "artist": "Beethoven",
            "song_path": "/path/to/songs/symphony5/allegro_con_brio.mp3"
          },
          {
            "song_name": "Andante con moto",
            "artist": "Beethoven",
            "song_path": "/path/to/songs/symphony5/andante_con_moto.mp3"
          },
          {
            "song_name": "Scherzo",
            "artist": "Beethoven",
            "song_path": "/path/to/songs/symphony5/scherzo.mp3"
          },
          {
            "song_name": "Allegro",
            "artist": "Beethoven",
            "song_path": "/path/to/songs/symphony5/allegro.mp3"
          }
        ]
      },
      {
        "album_name": "The Four Seasons",
        "artist": "Vivaldi",
        "album_art_path": "/path/to/album/art/four_seasons.jpg",
        "id": 2,
        "songs": [
          {
            "song_name": "Spring",
            "artist": "Vivaldi",
            "song_path": "/path/to/songs/four_seasons/spring.mp3"
          },
          {
            "song_name": "Summer",
            "artist": "Vivaldi",
            "song_path": "/path/to/songs/four_seasons/summer.mp3"
          },
          {
            "song_name": "Autumn",
            "artist": "Vivaldi",
            "song_path": "/path/to/songs/four_seasons/autumn.mp3"
          },
          {
            "song_name": "Winter",
            "artist": "Vivaldi",
            "song_path": "/path/to/songs/four_seasons/winter.mp3"
          }
        ]
      },
      {
        "album_name": "Brandenburg Concertos",
        "artist": "Bach",
        "album_art_path": "/path/to/album/art/brandenburg_concertos.jpg",
        "id": 3,
        "songs": [
          {
            "song_name": "No. 1",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concertos/no_1.mp3"
          },
          {
            "song_name": "No. 2",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concertos/no_2.mp3"
          },
          {
            "song_name": "No. 3",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concertos/no_3.mp3"
          },
          {
            "song_name": "No. 4",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concertos/no_4.mp3"
          },
          {
            "song_name": "No. 5",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concertos/no_5.mp3"
          },
          {
            "song_name": "No. 6",
            "artist": "Bach",
            "song_path": "/path/to/songs/brandenburg_concert"
          }
        ]
      }
    ]
  }
]

let playlistCount = 0;

const Home = () => {
  const [isAdding, setIsAdding] = useState(false)
  const [musicFolders, setMusicFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  // const [isSignedIn, setIsSignedIn] = useState(false);

  const onAdd = () => {
    setIsAdding(true);
  }

  const addFolder = (path) => {
    setIsAdding(false);
    
    // let folderAtPath = fetch(BASEURL + path);
    let folderAtPath = {...musicFoldersTemp[0]}; // temporary hard coded JSON
    playlistCount++;
    setMusicFolders((prev) => {
      folderAtPath.name = `Untitled Folder ${folderAtPath.id}`;
      folderAtPath.id = playlistCount;
      return [...prev, folderAtPath];
    });
  }

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
  }

  return (
    <div className="Home">
      {isAdding &&
        <div className="addMusicPopup">
          <AddFolder onAddFolder={addFolder} />
          <div className="overlay" />
        </div>}

      <div className="sideBar">
        <div className="functions">
          <button onClick={onAdd}>Add Playlist</button>
        </div>
        <div className="musicFolders">
          {musicFolders.map((folder) => {
            return <Link key={folder.id} style={{textDecoration: "none", color: "white"}}to={`/playlist/${folder.id}`}><p onClick={() => selectFolder(folder)}>{folder.name}</p></Link>
          })}
        </div>
      </div>
      <div className="head">
        <Link to="/signup"><button>Sign In</button></Link>
      </div>
      <div className="main">
        { selectedFolder && <AlbumList albums={selectedFolder ? selectedFolder.albums : []}/>}

        {/* <Routes>
          <Route path="/playlist/:id" element={<AlbumList albums={selectedFolder ? selectedFolder.albums : []}/>}/>
        </Routes> */}
      </div>
      <div className="buttons">

      </div>
    </div>
  )
}

export default Home;