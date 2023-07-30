import React from "react";
import "./index.css";
function Menu({ todos, setTodos, setFiltered, filtered }) {
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
    <div className="menu-container">
      <label className="menu-label">{`${filtered.length} items left`}</label>
      <button className="menu-button" name="all" onClick={onClick}>
        all
      </button>
      <button className="menu-button" name="complated" onClick={onClick}>
        complated
      </button>
      <button className="menu-button" name="not" onClick={onClick}>
        not complated
      </button>
    </div>
  );
}

export default Menu;
