import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
      alert("Todo cannot be allow empty");
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
   const confirmDelete = window.confirm('Are you sure you want to delete this todo ?');
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
    <div class='bod'>
    <div>
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
        
          <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleToggleCompleted}
          />
           <span className='show'>Show Completed Tasks</span> 
        </label>
      </div>

      <ul class='unOderlist'>
          {filteredTodos.map((todo, index) => (
          
          <li key={todo.id} class='border'>
            <input
              type="checkbox" className='cbox'
              checked={todo.completed}
              onChange={(e) =>
                handleEditTodo(todo.id, { completed: e.target.checked })
              }
            />
              {/* {todo.title}  */}
              <span className={todo.completed ? "completed" : ""}>{todo.title}</span>

          <span class='editDelet'>  <button onClick={() => handleStartEditing(todo.id)} class='edit' ><i class='far fa-edit' > </i></button>
            <button onClick={() => handleDeleteTodo(todo.id)}class='delbtns'><i class='fas fa-trash'></i></button></span>
              </li>
        
        ))}
        </ul>
        </center>
      </div>
      </div>
  );
}

export default AssignmentTodo;
