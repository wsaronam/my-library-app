import React from 'react';
import logo from './logo.svg';
import './App.css';

import Book from "./components/Book";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Library App</p>
      </header>

      <main className="App-main">
        <button>Add New Book</button>
      </main>
    </div>
  );
}

export default App;
