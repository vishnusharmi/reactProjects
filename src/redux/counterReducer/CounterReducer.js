// import { ACTION_TYPE } from "../Action-types/ActionTpes";

import { ACTION_TYPE } from "../Action-types/ActionTpes";

// const initialState = {
//   count: 0,
//   count1: 1,
// };

// export const counterReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case ACTION_TYPE.INCREMENT:
//       return { ...state, count: state.count + action.payload };
//     case ACTION_TYPE.DECREMENT:
//       return { ...state, count: state.count - action.payload };
//     case ACTION_TYPE.RESET:
//       return { ...state, count: action.payload };
//     default:
//       return state;
//   }
// };

const initialState = {
  count: 0,
  count1: 1,
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ACTION_TYPE.RESET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
