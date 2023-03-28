import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoAction,
  RemoveTodoAction,
} from "../TODORedux/ToDoAction/ActionTypeToDo";
import "../TODORedux/ToDoCSS/ToDo.css";

function ToDoRedux() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const Removehandle = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div>
      <header className="head">
        <h2 className="col">Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="inputs"
            placeholder="Add Todo List"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="add" type="submit">
            Add
          </button>
        </form>
        <br />
        <ul className="ulstyle">
          {todos &&
            todos.map((t) => (
              <li key={t.id}>
                <span className="todo">{t.todo}</span>

                <button onClick={() => Removehandle(t)} className="delete">
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default ToDoRedux;
