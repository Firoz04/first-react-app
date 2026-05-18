import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(10);

    //React Hook
    const handleCount = () => {
        setCount(count + 1);
    };
    const handleCount2 = () => {
        setCount(count - 1);
    };
    
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Increase by +1</button>
            <br />
            <button onClick= {handleCount2}>Decrease by -1</button>
        </div>
    );
}

export default Counter;
