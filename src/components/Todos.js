import React from "react";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}
