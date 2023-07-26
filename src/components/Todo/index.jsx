import { useState, useEffect } from "react";
import "./index.css";
import TodoList from "./todo-list";
import TodoInput from "./todo-input";

export default function Todo() {
  const [todos, setTodos] = useState([
    { value: "test-1", isDone: false },
    { value: "test-2", isDone: false },
  ]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="container-todo">
      <TodoInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
