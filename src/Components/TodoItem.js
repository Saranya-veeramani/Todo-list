import React, { useState } from 'react';
import './TodoItem.css';
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = e => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    if (!editValue.trim()) return;
    updateTodo({
      id: todo.id,
      title: editValue
    });
    setIsEditing(false);
  };

  return (
  
    <div>    {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>{todo.title}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
