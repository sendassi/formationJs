import React, { useState } from 'react';



function Cpte() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}
export default Cpte;

