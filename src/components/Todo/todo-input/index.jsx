import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";
export default function TodoInput({ setTodos, todos }) {
  const [value, setValue] = useState("");

  const _handleKeyDown = function (e) {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      }
      setTodos([
        ...todos,
        { id: uuid(), value: e.target.value, isDone: false },
      ]);
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
