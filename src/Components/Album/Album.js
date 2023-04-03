import "./Album.css";

const Album = (props) => {
    return (
        <div className="Album">
            <p>{props.name}</p>
        </div>
    )
};

export default Album;