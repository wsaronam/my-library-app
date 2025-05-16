import React, { useState, useEffect } from "react";
import { BookType } from "../types/Book";
import axios from "axios";




const ViewBooks: React.FC = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [loading, setLoading] = useState(true);


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
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ViewBooks;