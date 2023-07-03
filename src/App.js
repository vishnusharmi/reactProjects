import React from "react";

import AssignmentTodo from "./assignment/AssignmentTodo";
import Todo from "./practice/Todo";

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <AssignmentTodo />
      {/* <Todo /> */}
    </div>
  );
};
export default App;
