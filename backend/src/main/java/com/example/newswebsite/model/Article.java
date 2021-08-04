package com.example.newswebsite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Map;


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


    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name="Author_Id")
    private Author author;

//    @ManyToMany(cascade = {CascadeType.ALL})
//    Comment comments ;


    public Article() {
    }

    public Article( String title, String preview, String text) {
        this.title = title;
        this.preview = preview;
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
