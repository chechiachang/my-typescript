import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulHello from './components/StatefulHello';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Game from './components/TicTacToe';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';
import NumberList from './components/List';
import Blog from './components/Blog';

const Title: React.FunctionComponent<{ title: string }> = ({
  children,
  title
}) => <div title={title}>{children}</div>;

const NewTitle: React.FunctionComponent<{ title: string}> = ({
  children,
  title
}) => {
  return (
    <div title={title}>{children}</div>
  );
}

const numbers = [1,2,3,4,5];
const posts = [
  {id:"000", title:"title123", content:"content456"},
  {id:"000", title:"title123", content:"content456"},
  {id:"000", title:"title123", content:"content456"}
]

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StatefulHello name="TypeScript" enthusiasmLevel={10} />
        <Clock />
        <Toggle />
        <Title title="Hello World" children="Hello?"/>
        <NewTitle title="Hello World" children="Hello?"/>
        <Game />
        <Greeting isLoggedIn={false} />
        <LoginControl />
        <NumberList numbers={numbers}/>
        <Blog posts={posts}/>
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
