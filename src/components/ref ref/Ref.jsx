import React, { useRef, useState } from 'react';

function Ref() {

    //const [inputValue, setInputValue] = useState("");

    const inputRef = useRef()
    console.log(inputRef);
  
    

    const handleInput = (e) => { };
        // console.log(e)
        // setInputValue(e.target.value);
    //}
    const handleButton = (e) => {
        inputRef.current.focus();
        e.target.textContent = "focused";
    }
  return (
    <div>
          <input type="text" onChange={handleInput}  ref={inputRef} />
          <button onClick={handleButton}>focus</button>
    </div>
  );
}

export default Ref;

