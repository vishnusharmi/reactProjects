import { Button } from "react-bootstrap";
import Banner from "./components/banner/Banner";
import BodyParent from "./components/body/BodyParent";

import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

import FuncBased from "./components/funcBased/FuncBased";
import UpdateFunc from "./components/funcBased/hookFuncUpdate/UpdateFunc";
import FuncUserData from "./components/funcUserData/FuncUserData";
import Header from "./components/header/Header";
import List from "./components/list-and-keys/List";
import Ref from "./components/ref ref/Ref";
import RouterDom from "./components/router/RouterDom";
import State from "./components/state/State";
import A from "./components/useContext/A";
import B from "./components/useContext/B";
import D from "./components/useContext/D";
import UserTable from "./components/UserData/UserTable";

import React from "react";
import { getData } from "./components/services/Services";
import ReducerHook from "./components/reducerHook/ReducerHook";
import { useState } from "react";
import ReduxCounter from "./components/reduxCounter/ReduxCounter";
import Calculater from "./components/calculater/Calculater";
import ToDoRedux from "./components/toDoList/ToDoRedux";
import Weather from "./components/Projects/weatherAppReact/Weather";
import TodoReact from "./components/Projects/todoList/TodoReact";
import AssignmentTodo from "./assignment/AssignmentTodo";
import Practice from "./practice/Practice";

export const UserContext = React.createContext();

const App = () => {
  const [globalStateRedux, setGlobalState] = useState({
    // A: "A component Data",
    // B: "B component Data",
    // C: "C component Data",
    // D: "D component Data",
    // E: "E component Data",
    // F: "F component Data",
  });
  return (
    <div>
      {/* <UserContext.Provider value={globalStateRedux}>
        <A />
        <B />
        <D />
      </UserContext.Provider> */}

      {/* <Header />
      <Banner />
      <BodyParent />
      <Footer />
      <Button variant="primary">click</Button>
      {/* <State />
      <CantactUs /> 
      {/* <List /> */}
      {/* <UserTable /> */}
      {/* <Cards />  */}
      {/* <RouterDom /> */}
      {/* <FuncBased /> */}
      {/* <FuncUserData /> */}
      {/* <UpdateFunc /> */}
      {/* <Ref /> */}
      {/* <UserContext.Provider value={getData()}>
        <A data="10000 coders A component" />
        <B data="10000 coders C Component" />
        <D data="10000 coders F Component" />
      </UserContext.Provider> */}
      {/* <ReducerHook /> */}

      {/* <ReduxCounter /> */}
      {/* <Calculater /> */}
      {/* <Weather /> */}
      {/* <TodoReact /> */}
      <AssignmentTodo />
      {/* <Practice /> */}

      {/* <ToDoRedux /> */}
    </div>
  );
};
export default App;
