import React from 'react';
import { useState } from 'react';

import axios from "axios";

import { BookType } from "../types/Book";
import styles from '../styles/Book.module.css';


interface BookProps {
    book: BookType;
    onBookUpdated: (updatedBook: BookType) => void;
    onDelete: (id: number) => void;
}


const Book: React.FC<BookProps> = ({ book, onBookUpdated, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [editedBook, setEditedBook] = useState<BookType>({ ...book });

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/api/books/${book.id}`, editedBook);
            onBookUpdated(response.data);
            setEditing(false);
        } 
        catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const handleDelete = () => {
        const confirmed = window.confirm(`Are you sure you want to remove this book - "${book.title}"?`);
        if (confirmed) {
            onDelete(book.id);
        }
    };

    return (
        <div className={styles.bookCard}>
            {editing ? (
                <div>
                    <input
                        value={editedBook.title}
                        onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                    />
                    <input
                        value={editedBook.author}
                        onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                    />
                    <input
                        value={editedBook.description}
                        onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Description: {book.description}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
        
    )
}



export default Book;