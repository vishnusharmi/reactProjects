import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ToDoReduce } from "../ToDoReduce/ToDoReduce";

const reducer = combineReducers({
  Todo: ToDoReduce,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
