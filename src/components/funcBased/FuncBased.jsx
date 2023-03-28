
import React from 'react';
import { useState } from 'react';


function FuncBased() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleClick2=() => {
    setCount(count - 1);
  }
  
    const handleClick3=() => {
    setCount( 0);
}

  return (
    <div>
      <h1>Counter :{count }</h1>
      <button className='btn btn-primary' onClick={handleClick}>Increament  </button> 

          <button className='btn btn-primary' onClick={handleClick2}>decreament  </button>

          <button className='btn btn-primary' onClick={handleClick3}>reset  </button>
    </div>
  );
}

export default FuncBased;

