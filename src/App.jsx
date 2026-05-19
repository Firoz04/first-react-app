import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import User from './components/User';
import Greeting from './components/Greeting';
import Status from './components/Status';
import User2 from './components/User2';
import Cart from './components/Cart';
import AgeCheck from './components/AgeCheck';
import FormExample from './components/FormExample';

function App() {
  const [isloggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
    <h1>Hello World</h1>
    <Welcome name="Shakib" age=" 26"/>
    <Welcome name="Tamim" age=" 27"/>
    <Counter/>

    <User/>

    <Greeting is_loggedIn = {isloggedIn}/>
    <button onClick={()=> setIsLoggedIn(!isloggedIn)}>Toggle</button>

    <Status status={"error"} />

    <User2 is_loggedId={isloggedIn}/>

    <Cart items={["iteml", "books"]}/>

    <AgeCheck age={10}/>

    <FormExample/>
    </div>
  );
}

export default App;