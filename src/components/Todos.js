import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div className="flex gap-x-7 justify-center">
          <p key={todo.id}>{todo.text}</p>
          <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
        </div>
      ))}
    </div>
  );
}
