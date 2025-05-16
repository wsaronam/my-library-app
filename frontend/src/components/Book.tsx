import React from 'react';
import { BookType } from "../types/Book";
import styles from '../styles/Book.module.css';




const Book: React.FC<BookType> = ({ id, title, author, description }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Description: {description}</p>
        </div>
    )
}


export default Book;