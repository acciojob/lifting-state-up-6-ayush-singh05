
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn React", complete: false },
    { id: 2, name: "Build a React app", complete: false },
    { id: 3, name: "Deploy the React app", complete: false },
  ]);

  const handleClick = (idx) => {
    setTodos([...todos], (todos[idx].complete = !todos[idx].complete));
  };

  return (
    <div className="App">
      <h1>Parent</h1>
      <h2>Child</h2>
      {todos.map((item, idx) => (
        <div key={item.id}>
          <ul>
            <li>
              {item.name}
              {!item.complete && (
                <button onClick={() => handleClick(idx)}>Complete</button>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App
