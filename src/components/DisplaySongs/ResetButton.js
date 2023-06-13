import React from 'react';
import "./ResetButton.css";
import axios from "axios";

const ResetButton = () =>
{

    const clearStorage = () =>
    {
        localStorage.clear();
    }

    const destroyDatabases = () =>
    {
        axios.post('http://localhost:8081/deletion', 
        {
          data: "confirmDelete"
        });
    }

    return (
        <button class="reset-button" onClick={() => {
            clearStorage()
            destroyDatabases()
        }
    }>Reset App and Credentials</button>
    )
}

export default ResetButton;