import React, { useEffect, useState } from "react";
import "./index.css";
function Input({ todos, filtered, setFiltered, setTodos }) {
  const onChange = (id, e) => {
    const temp = todos.filter((item, index) => {
      if (item.id == id) {
        item.value = e.target.value;
      }
      return item;
    });
    setFiltered(temp);
  };
  const onClick = (id, e) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };
  const _handleKeyDown = function (index, e) {
    if (e.key === "Enter") {
      const newArray = [...filtered];
      if (e.target.value === "") {
        return;
      }
      newArray[index] = { ...newArray[index], value: e.target.value };
      setTodos(newArray);
    }
  };
  const triggerCheckbox = (id, e) => {
    const temp = todos.map((item) => {
      if (item.id == id) {
        item.isDone = e.target.checked;
      }
      return item;
    });
    setTodos(temp);
  };

  return (
    <div className="input-container">
      {filtered &&
        filtered.map((todo) => (
          <div className="input-items" key={todo.id}>
            <div className={"input-area"}>
              <input
                className="input-checkbox"
                name="isDone"
                onChange={(e) => triggerCheckbox(todo.id, e)}
                type="checkbox"
                checked={todo.isDone}
              />
              <input
                className={`items ${todo.isDone ? "complated" : ""}`}
                onKeyDown={(e) => _handleKeyDown(todo.id, e)}
                onChange={(e) => onChange(todo.id, e)}
                name="value"
                value={todo.value}
                type="text"
              />
            </div>
            <button onClick={() => onClick(todo.id)} className="delete-button">
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Input;
