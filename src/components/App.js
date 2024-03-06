
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn React", complete: false },
    { id: 2, name: "Build a React app", complete: false },
    { id: 3, name: "Deploy the React app", complete: false },
  ]);

  const handleComplete = (idx) => {
    setTodos([...todos], (todos[idx].complete = !todos[idx].complete));
  };

  return (
    <div className="App">
      <h1>Child Component</h1>
      <Todo todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App
