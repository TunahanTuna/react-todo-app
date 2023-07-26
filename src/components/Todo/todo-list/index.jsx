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
    <div className="container">
      {filtered.map((todo, index) => (
        <Input
          key={`unique-${index}`}
          item={todo}
          setTodos={setTodos}
          index={index}
          todos={todos}
          setFiltered={setFiltered}
        />
      ))}
      <Menu todos={todos} setTodos={setTodos} setFiltered={setFiltered} />
    </div>
  );
}

export default TodoList;
