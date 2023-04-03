import "./Album.css";
import { Link } from "react-router-dom";

const Album = (props) => {
    const handleAlbumClick = () => {
        props.onSelect(props.id);
    }

    return (
        <div className="Album" >
            <Link to={`album/${props.id}`} style={{textDecoration: "none", color: "white"}} onClick={handleAlbumClick}>
                <div className="albumDetails">
                    <img alt="album cover" src={props.cover}/>
                    <p>{props.name}</p>
                </div>
            </Link>
        </div>
    )
};

export default Album;