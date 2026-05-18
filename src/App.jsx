import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import User from './components/User';

function App() {
 
  return (
    <div>
    <h1>Hello World</h1>
    <Welcome name="Shakib" age=" 26"/>
    <Welcome name="Tamim" age=" 27"/>
    <Counter/>

    <User/>
    </div>
  );
}

export default App;