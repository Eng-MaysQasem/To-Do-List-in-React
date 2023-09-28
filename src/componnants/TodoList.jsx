import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul  style={{ "display": "inline-block", "textAlign": "left" }}>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
