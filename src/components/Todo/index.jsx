import { useState, useEffect } from "react";
import "./index.css";
import TodoList from "./todo-list";
import TodoInput from "./todo-input";
import Menu from "./Menu";

export default function Todo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  return (
    <div className="container-todo">
      <TodoInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
