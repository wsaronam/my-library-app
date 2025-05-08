import React from 'react';
import logo from './logo.svg';
import './App.css';

import Book from "./components/Book";
import AddBook from "./components/AddBook";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Library App</p>
      </header>

      <main className="App-main">
        <AddBook />
      </main>
    </div>
  );
}

export default App;
