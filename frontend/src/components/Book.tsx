import React from 'react';
import styles from '../styles/Book.module.css';


interface BookProps {
    id: number;
    title: string;
    author: string;
    description: string;
}


const Book: React.FC<BookProps> = ({ id, title, author, description }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Description: {description}</p>
        </div>
    )
}


export default Book;