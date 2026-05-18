import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Thanks..</h2>
      {users.map((user, _i) => (
        <div key={_i}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default User;
