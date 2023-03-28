import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';


function D() {
  const dData=useContext(UserContext)
    console.log(dData)
  return (
    <div>
      <h1>{dData.D }</h1>
    </div>
  );
}

export default D;
