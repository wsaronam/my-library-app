import React from "react";
import { useState } from "react";
import axios from "axios";

import { BookType } from "../types/Book";

import styles from '../styles/AddBook.module.css';



interface AddBookProps {
    onBookAdded: (book: BookType) => void;
};


const AddBook: React.FC<AddBookProps> = ({onBookAdded}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const newBook = { title, author, description };
    
        try {
            const response = await axios.post("/api/books", newBook);
            onBookAdded(response.data);
            setTitle("");
            setAuthor("");
            setDescription("");
        } 
        catch (error) {
            console.error("Error in saving book:", error);
        }
    };


    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required maxLength={100} className={styles.input} />
                <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required maxLength={100} className={styles.input} />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" maxLength={1000} className={styles.inputDesc} />
                <button type="submit" className={styles.button}>Add Book</button>
            </form>
        </div>
    )
}




export default AddBook