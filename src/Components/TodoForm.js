import React, { useState } from 'react';
import './TodoForm.css'
const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className='todo-form-container '>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
};
















export default TodoForm;
