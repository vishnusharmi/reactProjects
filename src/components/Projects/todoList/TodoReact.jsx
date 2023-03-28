

import React, { useState } from 'react';
import "./TodoReact.css";

function TodoReact() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo !== '') {
      setTodoItems([...todoItems, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const handleEditTodo = (index, newTodoText) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index] = newTodoText;
    setTodoItems(newTodoItems);
  };

  return (
    <div className='color'>
      <div className='main'>
      <h2 className='red'>Add Todo list</h2>
      <input className='inputtext'
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />     
      <button onClick={handleAddTodo} className="addbtn">Add</button><br/><br/>
      <ul className='ulstyle'>
        {todoItems.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='delbtn' onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => {
                    const newTodoText= window.prompt('Enter new todo text', todo);
              if (newTodoText !== null) {
                handleEditTodo(index, newTodoText);
              }
            }} className="editbtn">Edit</button>
          </li>
        ))}
        </ul>
        </div>
    </div>
  );
}

export default TodoReact;

