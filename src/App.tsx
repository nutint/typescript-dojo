import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyApp from './components/MyApp'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React with Nat
        </a>
        <MyApp/>
        <ShoppingList name="Nat"/>
      </header>
    </div>
  );
}

export default App;
