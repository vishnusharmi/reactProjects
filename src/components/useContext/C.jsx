import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';


function C() {
  const cValue = useContext(UserContext);
   console.log(cValue)
  return (
   
    <div>
      <h1>{cValue.c }</h1>
    </div>
  );
}

export default C;

