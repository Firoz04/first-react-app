import React from 'react';

function welcome({name,age}) {
  return (
    <div>
       <h1>Hello, {name}, Age:{age}</h1>
    </div>
  );
}

export default welcome;
