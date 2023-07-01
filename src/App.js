import React from "react";

import AssignmentTodo from "./assignment/AssignmentTodo";

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <AssignmentTodo />
    </div>
  );
};
export default App;
