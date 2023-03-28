import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';



function A() {
  const aValue = useContext(UserContext);
  console.log(aValue);
  return (
    <div>
          <h1>{aValue.a}</h1>
    </div>
  );
}

export default A;
