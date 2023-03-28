// import { combineReducers } from "redux";
// import { counterReducer } from "../counterReducer/CounterReducer";
// import { ProductReducer } from "../productReducer/ProductReducer";

// export const CommonReducer = combineReducers({
//   counterData: counterReducer,
//   //productData: ProductReducer,
// });

import { combineReducers } from "redux";
import { counterReducer } from "../counterReducer/CounterReducer";

export const CommonReducer = combineReducers({
  conterData: counterReducer,
});
