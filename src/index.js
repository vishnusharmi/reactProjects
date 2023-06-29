import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { store } from "./redux/store/Store";

import { Provider } from "react-redux";
import store from "./components/TODORedux/ToDoStore/ToDoStore";
//import { store } from "./redux/store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);
