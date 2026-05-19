import React, { useState } from "react";

function FormExample() {
  //usestate ae modde data store
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name,age);
    alert(`Form Submitted Name: ${name} And Age: ${age}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input type="number" placeholder="Enter Age"
      onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
