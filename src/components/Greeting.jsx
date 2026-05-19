import React from "react";

function Greeting({ is_loggedIn }) {
  if (is_loggedIn) {
    return <h1>Welcome Back..</h1>;
  } else {
    return <h1> Please Login </h1>;
  }
}

export default Greeting;
