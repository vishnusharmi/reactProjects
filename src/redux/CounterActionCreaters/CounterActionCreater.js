// import { ACTION_TYPE } from "../Action-types/ActionTpes";

import { ACTION_TYPE } from "../Action-types/ActionTpes";

// export const increment = (value) => {
//   return { type: ACTION_TYPE.INCREMENT, payload: value };
// };

// export const decrement = (value) => {
//   return { type: ACTION_TYPE.DECREMENT, payload: value };
// };

// export const reset = (value) => {
//   return { type: ACTION_TYPE.RESET, payload: value };
// };

export const Increment = (value) => {
  return { type: ACTION_TYPE.INCREMENT, payload: value };
};

export const Decrement = (value) => {
  return { type: ACTION_TYPE.DECREMENT, payload: value };
};

export const Reset = (value) => {
  return { type: ACTION_TYPE.RESET, payload: value };
};
