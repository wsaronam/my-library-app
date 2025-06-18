import React, { useState, useEffect } from "react";
import { BookListType } from "../types/BookList";




const ViewBooks: React.FC<BookListType> = ({ books }) => {

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