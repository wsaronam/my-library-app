import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

import Book from "./components/Book"
import { BookType } from "./types/Book";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";


function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [showBooks, setShowBooks] = useState(false);


  const handleDeleteBook = async (id: number) => {
    try {
      await axios.delete(`/api/books/${id}`);
      setBooks(prev => prev.filter(book => book.id !== id));
    } 
    catch (error) {
      console.error("Error deleting book", error);
    }
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
          {/* {showBooks && <ViewBooks books={books} onDelete={handleDeleteBook} />} */}
          {showBooks && (
            <div>
              {books.map(book => (
                <Book key={book.id} book={book} onDelete={handleDeleteBook} />
              ))}
            </div>
          )}
        </div>
        
      </main>
    </div>
  );
}

export default App;
