import React from "react";
import "./index.css";
function Menu({ todos, setTodos, setFiltered }) {
  const onClick = (e) => {
    if (e.target.name === "all") {
      setFiltered(todos.filter((item) => item));
      return;
    }
    if (e.target.name === "not") {
      setFiltered(todos.filter((item) => item.isDone != true));
      return;
    }
    if (e.target.name === "complated") {
      setFiltered(todos.filter((item) => item.isDone === true));
      return;
    }
  };
  return (
    <div>
      <button name="all" onClick={onClick}>
        all
      </button>
      <button name="complated" onClick={onClick}>
        complated
      </button>
      <button name="not" onClick={onClick}>
        not complated
      </button>
    </div>
  );
}

export default Menu;
