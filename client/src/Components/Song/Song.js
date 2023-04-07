import "./Song.css"

const Song = (props) => {
    return (
        <div className="Song">
            <div className="songInfo">
                <p>{props.name}</p>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}

export default Song;