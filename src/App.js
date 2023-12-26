import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setToDo(event.target.value);
  };

  const addNewToDo = () => {
    if (toDo.trim() !== "") {
      setTodos([...todos, { task: toDo, completed: false }]);
      setToDo(""); // Das Eingabefeld leeren
    }
  };

  const toggleToDo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteToDo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React To Do App</h2>
      </header>
      <input
        type="text"
        name="input"
        id="input"
        value={toDo}
        onChange={handleInputChange}
      />
      <button className="add-button" type="button" onClick={addNewToDo}>
        Add To Do
      </button>
      <div className="to-do-container">
        <div className="to-dos">
          {todos.map((task, index) => (
            <div key={index} className="to-do-button">
              <p
                className={`to-do ${task.completed ? "completed" : ""}`}
                onClick={() => toggleToDo(index)}
              >
                {task.task}
              </p>
              <button
                className="delete-button"
                onClick={() => deleteToDo(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
