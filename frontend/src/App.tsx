import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

import { BookType } from "./types/Book";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";


function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [showBooks, setShowBooks] = useState(false);

  // use this to get books
  const getBooks = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data);
    } 
    catch (err) {
      console.error("Failed to fetch books", err);
    }
  };

  const handleBookAdded = async () => {
    await getBooks();
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Library App</p>
      </header>

      <main className="App-main">
        <AddBook onBookAdded={handleBookAdded} />
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
