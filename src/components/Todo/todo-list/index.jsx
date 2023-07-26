import { useState } from "react";
import "./index.css";
import Input from "./input";
function TodoList({ todos, setTodos }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Input
          key={index}
          item={todo}
          setTodos={setTodos}
          index={index}
          todos={todos}
        />
      ))}
    </div>
  );
}

export default TodoList;
