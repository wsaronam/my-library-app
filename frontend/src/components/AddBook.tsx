import React from "react";
import { useState } from "react";
import axios from "axios";

import { BookType } from "../types/Book";



type AddBookProps = {
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
            onBookAdded(response.data); // this will let App know book list has been updated
            setTitle("");
            setAuthor("");
            setDescription("");
        } 
        catch (error) {
            console.error("Error in saving book:", error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}




export default AddBook