import React, { useEffect, useState } from "react";
import "./index.css";
export default function TodoInput({ setTodos, todos }) {
  const [value, setValue] = useState("");

  const _handleKeyDown = function (e) {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      }
      setTodos([...todos, { value: e.target.value, isDone: false }]);
      e.target.value = "";
    }
  };
  return (
    <div className="container-input">
      <input
        onKeyDown={_handleKeyDown}
        name="inp"
        placeholder="What needs to be done!"
      />
    </div>
  );
}
