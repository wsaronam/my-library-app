import React from "react";
import { useState } from "react";
import axios from "axios";




const AddBook: React.FC = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const newBook = { title, author, description };
    
        try {
            const response = await axios.post("/api/books", newBook);
            console.log("book being saved:", response.data);
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
                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}




export default AddBook