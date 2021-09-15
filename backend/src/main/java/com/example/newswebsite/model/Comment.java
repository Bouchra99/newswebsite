package com.example.newswebsite.model;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long Id;

//    @ManyToOne(cascade = {CascadeType.MERGE})
//    @JoinColumn(name="Username")
//    User username;

    String username;
    String text;
    int likes;
    int dislikes;

//    @ManyToOne(cascade = {CascadeType.MERGE})
//    @JoinColumn(name="Article_Id")
//    Article article;

    Long article_id ;

    public Comment() {
    }

    public Comment(String username, String text, int likes, int dislikes,Long article_id) {
        this.username = username;
        this.text = text;
        this.likes = likes;
        this.dislikes = dislikes;
        this.article_id = article_id;

    }

//    public Comment(String username, String text, int likes, int dislikes, Article article) {
//
//        this.username = username;
//        this.text = text;
//        this.likes = likes;
//        this.dislikes = dislikes;
//        this.article = article;
//
//    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
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

//    public Article getArticle() {
//        return article;
//    }
//
//    public void setArticle(Article article) {
//        this.article = article;
//    }


    public Long getArticle_id() {
        return article_id;
    }

    public void setArticle_id(Long article_id) {
        this.article_id = article_id;
    }
}
