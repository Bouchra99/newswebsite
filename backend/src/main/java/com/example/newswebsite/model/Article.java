package com.example.newswebsite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(scale = 1)
    private String title ;
    @Column(scale = 2)
    private String preview;
    @Column( length = 100000 ,scale = 3)
    private String text;


    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name="Author_Id")
    private Author author;
    @Column(scale = 5)
    private String category;


//    @OneToMany(cascade = {CascadeType.MERGE})
//    Set<Comment> commentsList = new HashSet<>();





    public Article() {
    }

    public Article( String category, String title, String preview, String text) {
        this.category = category ;
        this.title = title;
        this.preview = preview;
        this.text = text;
    }

    public Article(String category, String title, String preview, String text, Author author) {

        this.title = title;
        this.preview = preview;
        this.text = text;
        this.author = author;
        this.category = category;

    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPreview() {
        return preview;
    }

    public void setPreview(String preview) {
        this.preview = preview;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }


}
