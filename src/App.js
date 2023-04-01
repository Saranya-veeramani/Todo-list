import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        id: currentId,
        title
      }
    ]);
    setCurrentId(currentId + 1);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = updatedTodo => {
    setTodos(
      todos.map(todo =>
        todo.id === updatedTodo.id ? { ...todo, title: updatedTodo.title } : todo
      )
    );
  };

  return (
    <div>
      <h1 style ={{ 
        textAlign:'center',
      }}>Todo App </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default App;