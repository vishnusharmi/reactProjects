
import "./Calculater.css";
import React, { useState } from 'react';

function Calculater() {
  const [count, setCount] = useState("");

  const handleClick = (e) => {
    setCount(count.concat(e.target.value));
  }

  const disClear = () => {
    setCount("");
  }

  const calcular = () => {
    setCount(eval(count).toString());
  }
  return (
    <div className='calcy'>
            <input type="text" placeholder='0' id='display' value={count}  />
            <input type="button" value="9" className='buttons' onClick={handleClick} />
            <input type="button" value="8" className='buttons' onClick={handleClick}/>
            <input type="button" value="7" className='buttons' onClick={handleClick}/>
            <input type="button" value="÷" className='buttons equal' onClick={handleClick}/>
             <input type="button" value="6" className='buttons' onClick={handleClick}/>
            <input type="button" value="5" className='buttons' onClick={handleClick}/>
            <input type="button" value="4" className='buttons' onClick={handleClick}/>
            <input type="button" value="×" className='buttons equal' onClick={handleClick}/>
             <input type="button" value="3" className='buttons' onClick={handleClick}/>
            <input type="button" value="2" className='buttons' onClick={handleClick}/>
            <input type="button" value="1" className='buttons' onClick={handleClick}/>
            <input type="button" value="−" className='buttons equal' onClick={handleClick}/>
            <input type="button" value="0" className='buttons' onClick={handleClick}/>
            <input type="button" value="∙" className='buttons equal' onClick={handleClick}/>
            <input type="button" value="+" className='buttons equal' onClick={handleClick}/>
        <input type="button" value="⁼" className='buttons equal'  onClick={calcular}/>
        <input type="button" value="CLEAR" className='buttons button1' onClick={disClear}/>


      </div>
  );
}

export default Calculater;



