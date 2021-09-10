package com.example.newswebsite.model;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long Id;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name="Username")
    User username;
    String text;
    int likes;
    int dislikes;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name="Article_Id")
    Article article;

    public Comment() {
    }

    public Comment( User username, String text, int likes, int dislikes,Article article) {

        this.username = username;
        this.text = text;
        this.likes = likes;
        this.dislikes = dislikes;
        this.article = article;

    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public User getUsername() {
        return username;
    }

    public void setUsername(User username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
