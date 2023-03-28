import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

function F() {
  const fData = useContext(UserContext);
  console.log(fData);
  return (
    <div>
      
    </div>
  );
}

export default F;

