import React from "react";
import "./App.css";
import Title from "./components/Title";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="main">
      <Title title="todos" />
      <Todo />
    </div>
  );
}

export default App;
