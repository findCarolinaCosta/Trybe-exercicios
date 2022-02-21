import React, { useState } from 'react';
import useTodoList from '../hooks/useTodoList';

function Todo() {
  const [todo, setTodo] = useState('');
  const { todoList, addTodos  } = useTodoList();

  const handleChange = ({ target }) => {
    const { value } = target;
    setTodo(value);
  }

  const handleClick = () => {
    addTodos(todo);
    setTodo('');
  }

  return ( 
    <div className='container'>
      <input onChange={ handleChange }  value={ todo } />
      <button type='button' onClick={ () => handleClick() }>Adiciona tarefa</button>
      <ul>
        {todoList.map((todo, index) => <li key={Math.random().toString().substr(2, 5)}>{todo}</li>)}
      </ul>
    </div>
   );
}

export default Todo;