import React, { useEffect, useState } from "react";
import "./index.css";
function Input({ filtered, setFiltered, setTodos }) {
  const onChange = (id, todo, e) => {
    const temp = filtered.filter((item, index) => {
      if (index == id) {
        item.value = e.target.value;
      }
      return item;
    });
    setFiltered(temp);
  };
  const onClick = (id, e) => {
    const newArray = filtered.filter((todo, index) => index !== id);
    setTodos(newArray);
    console.log(id);
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

  return (
    <div className="input-container">
      {filtered.map((todo, index) => (
        <div className="input-items" key={index}>
          <input
            className="items"
            onKeyDown={(e) => _handleKeyDown(index, e)}
            onChange={(e) => onChange(index, todo, e)}
            name="value"
            value={todo.value}
          />

          <button onClick={() => onClick(index)} className="delete-button">
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Input;
