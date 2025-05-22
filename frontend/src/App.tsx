import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { BookType } from "./types/Book";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";


function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [showBooks, setShowBooks] = useState(false);

  const handleDeleteBook = (id: number) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Library App</p>
      </header>

      <main className="App-main">
        <AddBook onBookAdded={(book) => setBooks(prev => [...prev, book])} />
        <div>
          <button onClick={() => setShowBooks(prev => !prev)}>
            {showBooks ? "Hide Books" : "View Books"}
          </button>
          {showBooks && <ViewBooks books={books} />}
        </div>
        
      </main>
    </div>
  );
}

export default App;
