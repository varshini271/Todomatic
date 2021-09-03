import logo from './logo.svg';
import './App.css';

function App(props) {
  const variable=props.subject
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {variable}!
        </p>
      </header>
    </div>
  );
}

export default App;
