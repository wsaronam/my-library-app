import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

import Book from "./components/Book"
import { BookType } from "./types/Book";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";


function App() {
  // we will use searchQuery to search for the book with title or author
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);
  const [showBooks, setShowBooks] = useState(false);


  const handleBookUpdated = (updatedBook: BookType) => {
    setBooks(prevBooks =>
      prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

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
          {/* we need to tie in this input with a search that will show what we are searching for */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {showBooks && (
            <div>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(book => (
                  <Book 
                    key={book.id} 
                    book={book} 
                    onBookUpdated={handleBookUpdated} 
                    onDelete={handleDeleteBook} 
                  />
              ))}
            </div>
          )}
        </div>
        
      </main>
    </div>
  );
}

export default App;
