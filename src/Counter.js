import React, { useState } from 'react';

function Counter() {
  const [n, setN] = useState(0);
  
  console.log('re-render');
  
  function increment(){
    setN(n + 10);
    console.log(n)
  }
  
  return (
    <div>
        <span>{n}</span>
        <button onClick={increment}>Increment </button>
    </div>
  );
}

export default Counter;