import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulHello from './components/StatefulHello';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Game from './components/TicTacToe';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StatefulHello name="TypeScript" enthusiasmLevel={10} />
        <Clock />
        <Toggle />
        <Game />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
