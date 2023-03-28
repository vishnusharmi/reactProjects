//method import in redux

// import { createStore } from "redux";
// import { CommonReducer } from "../commonReducer/CommonReducer";
// export const store = createStore(CommonReducer, {});

import { createStore } from "redux";
import { CommonReducer } from "../commonReducer/CommonReducer";

export const store = createStore(CommonReducer, {});
