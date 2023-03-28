// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, reset } from '../../redux/CounterActionCreaters/CounterActionCreater';

// function ReduxCounter() {
//   const dispatch = useDispatch();
//   const countData = useSelector((state) => state);
//   console.log(countData);
//   return (
//     <div>
//       <h1>Counter :{countData.counterData.count }</h1>
//       <button className="btn btn-info mx-2" onClick={() => { dispatch(increment(1)); }}>increment</button>
//       <button className="btn btn-info mx-2" onClick={() => { dispatch(decrement(1)); }}>decrement</button>
//       <button className="btn btn-info mx-2" onClick={() => { dispatch(reset(0)); }}>reset</button>
      
//     </div>
//   );
// }

// export default ReduxCounter;

import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { Decrement, Increment, Reset } from "../../redux/CounterActionCreaters/CounterActionCreater";

function ReduxCounter() {
  const Dispatch = useDispatch();
  const countData = useSelector((state) => state);
  return (
    <div>
      <h1>Counter : {countData.counterData.count }</h1>
      <button className="btn btn-primary mx-2" onClick={() => { Dispatch(Increment(1)); }}>Increment</button>
      <button className="btn btn-primary mx-2" onClick={() => { Dispatch(Decrement(1)); }}>Decrement</button>
      <button className="btn btn-primary mx-2" onClick={() => { Dispatch(Reset(0)); }}>Reset</button>
    </div>
  );
}

export default ReduxCounter;


