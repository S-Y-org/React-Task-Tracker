import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    //If you at the code inside the return statement, you'll see that it's just HTML. No it's not. It's JSX.
    // JSX stands for "JavaScript XML." It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX is commonly used in React.js to define the structure and appearance of user interfaces. It provides a convenient way to create and manipulate DOM elements, making it easier to build dynamic and interactive web applications.

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
