import "./SongList.css";
import Song from "../Song/Song";

const SongList = (props) => {
    return (
        <div className="SongList">
            { props.songs.map((song) => {
                return <Song name={song.song_name} artist={song.artist}/>
            })}
        </div>
    )
}

export default SongList;