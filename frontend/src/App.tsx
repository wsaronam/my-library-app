import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";


function App() {
  const [showBooks, setShowBooks] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Library App</p>
      </header>

      <main className="App-main">
        <AddBook />
        <div>
          <button onClick={() => setShowBooks(prev => !prev)}>
            {showBooks ? "Hide Books" : "View Books"}
          </button>
          {showBooks && <ViewBooks />}
        </div>
        
      </main>
    </div>
  );
}

export default App;
