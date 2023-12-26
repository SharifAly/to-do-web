import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React To Do App</h2>
      </header>
      <input type="text" name="input" id="input" />
      <button className="add-button" type="submit">
        Add To Do
      </button>
      <div className="to-do-container">
        <p className="to-do">to do</p>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default App;
