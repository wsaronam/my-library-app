import React from 'react';
import { BookType } from "../types/Book";
import styles from '../styles/Book.module.css';


interface BookProps {
    book: BookType;
    onDelete: (id: number) => void;
}


const Book: React.FC<BookProps> = ({ book, onDelete }) => {
    const handleDelete = () => {
        const confirmed = window.confirm(`Are you sure you want to remove this book - "${book.title}"?`);
        if (confirmed) {
            onDelete(book.id);
        }
    };

    return (
        <div className={styles.card}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}



export default Book;