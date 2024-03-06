
import React from "react";
const Todo = ({ todos, handleComplete }) => {
    return (
      <div>
        <h2>Child</h2>
        {todos.map((item, idx) => (
          <div key={item.id}>
            <ul>
              <li>
                {item.name}
                {!item.complete && (
                  <button onClick={() => handleComplete(idx)}>Complete</button>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  };
  export default Todo;
  