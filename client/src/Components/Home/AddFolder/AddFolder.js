import "./AddFolder.css";
import { useState } from "react";

const AddFolder = (props) => {  
    const [path, setPath] = useState("");

    const handlePathChange = (event) => {
        setPath(event.target.value)
    }

    const handleAddFolder = () => {
        props.onAddFolder(path)
    }

    return (
        <div className="AddFolder">
            <p>Enter path to music folder</p>
            <input type="text" onChange={handlePathChange} value={path}/>
            <button onClick={handleAddFolder}>Add Folder</button>
        </div>
    )
}

export default AddFolder;