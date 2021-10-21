import "./App.css";
import logo from "./logo.svg";

function App(props) {
  var subject = props.name;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}

export default App;
