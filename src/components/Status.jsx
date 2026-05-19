import React from "react";

function Status({status}) {
    switch (status) {
        case "Loading":
            return <p>Loading......</p>;
        case "Success":
            return <p>Data laoded</p>;
        case "error":
            return <p>Error Occurred!</p>;
        default:
            return <p>Unknown Status</p>        
    }
}

export default Status;
