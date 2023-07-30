import { useEffect, useState } from "react";
import "./index.css";
import Input from "./input";
import Menu from "../Menu";
function TodoList({ todos, setTodos }) {
  const [filtered, setFiltered] = useState(todos);
  useEffect(() => {
    console.log(filtered);
  }, [filtered]);
  useEffect(() => {
    setFiltered(todos);
  }, [todos]);
  return (
    <div className="container-list">
      <Input
        filtered={filtered}
        setFiltered={setFiltered}
        setTodos={setTodos}
      />
      <Menu
        todos={todos}
        setTodos={setTodos}
        setFiltered={setFiltered}
        filtered={filtered}
      />
    </div>
  );
}

export default TodoList;
