import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Practice = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getFetchData();
    },[])

    const getFetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
      {}
    </div>
  );
}

export default Practice;
