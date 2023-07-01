import React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assignment.css';

function AssignmentTodo() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      toast.error('Todo cannot be empty', {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    }

    const isDuplicate = todos.some(
      (todo) => todo.title.toLowerCase() === newTodo.toLowerCase()
    );
    if (isDuplicate) {
      toast.warning("Task already exists!");
      setNewTodo("");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: todos.length + 1,
            title: newTodo,
            completed: false,
          }),
        }
      );
      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, data]);
      setNewTodo("");
      toast.success("Task added successfully!");
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };

  const handleEditTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
    setEditingTodo(null);
  };

  const handleDeleteTodo = (id, title) => {
    
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
     toast.info(`Deleted Successfully`);
  };

  const handleStartEditing = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setEditingTodo(todo);
      setNewTodo(todo.title);
    }
  };

  const handleCancelEditing = () => {
    setEditingTodo(null);
    setNewTodo("");
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (editingTodo) {
      handleEditTodo(editingTodo.id, { title: newTodo });
      setNewTodo("");
    }
  };

  const handleToggleCompleted = () => {
    setShowCompleted((prevShowCompleted) => !prevShowCompleted);
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="bod">
      <div>
        <center>
          <h1 className="head">Todo App</h1>
          <div>
            {editingTodo ? (
              <form onSubmit={handleUpdateTodo}>
                <input
                  type="text"
                  className="enter"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit" className="update">
                  Update
                </button>
                <button onClick={handleCancelEditing} className="canceled">
                  Cancel
                </button>
              </form>
            ) : (
              <form onSubmit={handleAddTodo}>
                <input
                  type="text"
                  className="enter"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit" className="addtodo">
                  Add Todo
                </button>
              </form>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={handleToggleCompleted}
              />
              <span className="show">Show Completed Tasks</span>
            </label>
          </div>

          <ul className="unOderlist">
            {filteredTodos.map((todo, index) => (
              <li key={todo.id} className="border">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <input
                      type="checkbox"
                      className="cbox"
                      checked={todo.completed}
                      onChange={(e) =>
                        handleEditTodo(todo.id, { completed: e.target.checked })
                      }
                    />
                    <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleStartEditing(todo.id)}
                      className="edit"
                    >
                      <i className="far fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id, todo.title)}
                      className="delbtns"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </center>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AssignmentTodo;
