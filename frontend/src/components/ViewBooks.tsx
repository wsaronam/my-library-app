import React, { useState, useEffect } from "react";
import { BookType } from "../types/Book";
import axios from "axios";




const ViewBooks: React.FC = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [loading, setLoading] = useState(true);


    // get the books from the database
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("/api/books");
                setBooks(response.data);
                setLoading(false);
            } 
            catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);


    // delete book from database
    // tie this to a button for each book
    const deleteBook = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this book?");
        if (!confirmDelete) return;

        try {
            console.log(books);
            await axios.delete(`/api/books/${id}`);
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
            
        } 
        catch (error) {
            console.error("Error deleting book:", error);
        }
    };


    if (loading) {
        return <p>Loading books...</p>;
    }

    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}<br />
                        {book.description}
                        <button onClick={() => deleteBook(book.id)}>Remove Book</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ViewBooks;