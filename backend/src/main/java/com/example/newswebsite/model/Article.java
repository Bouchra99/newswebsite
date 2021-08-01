package com.example.newswebsite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Map;


@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title ;
    private String text;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name="Author_Id")
    private Author author;

//    @ManyToMany(cascade = {CascadeType.ALL})
//    Comment comments ;


    public Article() {
    }

    public Article(String title, String text) {
        this.title = title;
        this.text = text;
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
