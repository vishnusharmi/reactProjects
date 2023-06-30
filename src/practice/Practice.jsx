import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Practice = () => {
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

    // Validate if newTodo is not empty
    if (newTodo.trim() === "") {
      alert("Todo cannot be empty");
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

  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  const handleStartEditing = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setEditingTodo(todo);
    }
  };

  const handleCancelEditing = () => {
    setEditingTodo(null);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (editingTodo) {
      handleEditTodo(editingTodo.id, { title: newTodo });
    }
  };

  const handleToggleCompleted = () => {
    setShowCompleted((prevShowCompleted) => !prevShowCompleted);
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        {editingTodo ? (
          <form onSubmit={handleUpdateTodo}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">Update Todo</button>
            <button onClick={handleCancelEditing}>Cancel</button>
          </form>
        ) : (
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
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
          Show Completed
        </label>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                handleEditTodo(todo.id, { completed: e.target.checked })
              }
            />
            <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
            <button onClick={() => handleStartEditing(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practice;
