import React from 'react';

function Greeting({ name }) {
  return <h1>Bienvenue, {name}!</h1>;
}

function App() {
  return <div>
    <Greeting name="Ali" />
    <Greeting name="Yosra" />
    <Greeting name="Sendassi" />

  </div>
    ;
}
export default App;