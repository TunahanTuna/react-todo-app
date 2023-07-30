import { useState, useEffect } from "react";
import "./index.css";
import TodoList from "./todo-list";
import TodoInput from "./todo-input";
import Menu from "./Menu";

export default function Todo() {
  var idCounter = 3;
  const [todos, setTodos] = useState([
    { value: "test-1", isDone: true },
    { value: "test-2", isDone: true },
    { value: "test-3", isDone: false },
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
