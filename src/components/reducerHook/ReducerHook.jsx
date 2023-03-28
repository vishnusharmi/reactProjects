import React, { useReducer } from 'react';


function ReducerHook() {
  const reducer = (cuurentState, action) => {
    console.log(action)
    // reduser is used to update the state based on user actions
    // it returns the update state
    if (action.type === "INCREMENT") {
      return cuurentState + 1;
    }
  };
 const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
          <h1>Count :{count}</h1>
          <div className="btn btn-info mx-3" onClick={() => { dispatch({ type: "INCREMENT" }); }}>increment</div>
          <div className="btn btn-info mx-3">decrement</div>
    </div>
  );
}

export default ReducerHook;
