import React, { useEffect, useState } from "react";
import "./index.css";
function Input({ item, setTodos, index, todos, setFiltered }) {
  const [todo, setTodo] = useState(item);
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const onClick = (id, e) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
    console.log(id);
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
    <div className="input-container">
      <input
        className="items"
        onKeyDown={_handleKeyDown}
        onChange={onChange}
        name="value"
        value={todo.value}
      />
      <button onClick={() => onClick(todo.id)} className="delete-button">
        delete
      </button>
    </div>
  );
}

export default Input;
