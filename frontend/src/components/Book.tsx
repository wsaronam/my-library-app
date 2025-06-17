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
                <div className={styles.editForm}>
                    <input
                        value={editedBook.title}
                        onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                        maxLength={100}
                        className={styles.editInput}
                    />
                    <input
                        value={editedBook.author}
                        onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                        maxLength={100}
                        className={styles.editInput}
                    />
                    <textarea
                        value={editedBook.description}
                        onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
                        maxLength={1000}
                        className={styles.editTextarea}
                    />
                    <div className={styles.editFormButtons}>
                        <button onClick={handleUpdate} className={styles.saveButton}>Save</button>
                        <button onClick={() => setEditing(false)} className={styles.cancelButton}>Cancel</button>
                    </div>
                    
                </div>
            ) : (
                <div>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong><br /> {book.author}</p>
                    <p><strong>Description:</strong><br /> {book.description}</p>
                    <div className={styles.bookButtons}>
                        <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
                        <button onClick={() => setEditing(true)} className={styles.editButton}>Edit</button>
                    </div>
                </div>
            )}
        </div>
        
    )
}



export default Book;