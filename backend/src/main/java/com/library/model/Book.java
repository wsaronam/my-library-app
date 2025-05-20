package com.library.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;




@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String description;


    // Constructors
    public Book() {}

    public Book(Long id, String title, String author, String description) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }


    // Gets and Sets
    public Long getId() { return id; }
    //public void setId(Integer id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
