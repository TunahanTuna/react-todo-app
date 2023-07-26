import React, { useState } from "react";
import "./index.css";
function Input({ item, setTodos, index, todos }) {
  const [todo, setTodo] = useState(item);
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const _handleKeyDown = function (e) {
    if (e.key === "Enter") {
      const newArray = [...todos];
      if (e.target.value === "") {
        return;
      }
      newArray[index] = { ...newArray[index], value: e.target.value };
      setTodos(newArray);
    }
  };

  return (
    <div className="container">
      <input
        className="items"
        onKeyDown={_handleKeyDown}
        onChange={onChange}
        name="value"
        value={todo.value}
      />
    </div>
  );
}

export default Input;
