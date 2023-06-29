import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './assignment.css';

function AssignmentTodo() {

const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

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
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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

  return (
    <div class='bod'>
      <center>
      <h1 class='head'>Todo App</h1>
      <div>
        {editingTodo ? (
          <form onSubmit={handleUpdateTodo}>
            <input
              type="text" class='enter'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" class='update'>Update</button>
            <button onClick={handleCancelEditing} class='canceled'>Cancel</button>
          </form>
        ) : (
          <form onSubmit={handleAddTodo}>
            <input
              type="text" class='enter'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" class='addtodo'>Add Todo</button>
          </form>
        )}
      </div>
      <ul class='unOderlist'>
          {todos.map((todo, index) => (
          
          <li key={todo.id} class='border'> (ID: {todo.id})
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                handleEditTodo(todo.id, { completed: e.target.checked })
              }
            />
            {todo.title} 
            <button onClick={() => handleStartEditing(todo.id)} class='edit' ><i class='far fa-edit' > </i></button>
            <button onClick={() => handleDeleteTodo(todo.id)}class='delbtns'><i class='fas fa-trash'></i></button>
              </li>
        
        ))}
        </ul>
        </center>
    </div>
  );
}

export default AssignmentTodo;
