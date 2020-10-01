import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="button" className="button-counter" value="Count" onClick={() => {setCount(count+1);}}/>
        </div>
        <br/>
        <div>
          <label>Times Clicked:</label>
        </div>
        <div>
          <label>{count}</label>
        </div>
      </header>
    </div>
  );
}

export default App;
