import React from "react";

function AgeCheck({ age }) {
  return (
    <>
      {(() => {
        if (age >= 18) return <h2>Adult</h2>;
        else return <h2>Minor</h2>;
      })()}
    </>
  );
}

export default AgeCheck;
