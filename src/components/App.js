
import React from "react";
import './../styles/App.css';

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build a React app" },
    { id: 3, name: "Deploy the React app" },
  ]);
  const [clickedItems, setClickedItems] = useState([]);

  const handleComplete = (id) => {
    setClickedItems([...clickedItems, id]);
  };

  const isItemClicked = (id) => {
    return clickedItems.includes(id);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      {todo.map((item) => (
        <div key={item.id}>
          <ul>
            <li>
              {item.name}
              {!isItemClicked(item.id) && (
                <button onClick={() => handleComplete(item.id)}>Complete</button>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App
