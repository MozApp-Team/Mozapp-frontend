import "./AlbumList.css";
import Album from "../Album/Album";

const AlbumList = (props) => {
    return (
        <div className="AlbumList">
            {props.albums.map((album) => {
                return <Album key={album.id} name={album.album_name} artist={album.artist} cover={album.cover} />
            })}
        </div>
    )
}

export default AlbumList