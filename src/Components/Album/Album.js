import "./Album.css";

const Album = (props) => {
    return (
        <div className="Album">
            <img alt="album cover" src={props.cover}/>
            <p>{props.name}</p>
        </div>
    )
};

export default Album;