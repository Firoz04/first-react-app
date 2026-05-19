import React from "react";

function User2({ is_loggedId}) {
    return <div>
       <h1>{ is_loggedId ? "Welcome user": "Guest User"}</h1> 

    </div>;
}

export default User2;
