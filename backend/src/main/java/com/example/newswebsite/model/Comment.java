package com.example.newswebsite.model;

import javax.persistence.Entity;

//@Entity
public class Comment {
    User username;
    String text;
    int likes;
    int dislikes;
    int test ;

    public Comment(User username, String text, int likes, int dislikes, int test) {
        this.username = username;
        this.text = text;
        this.likes = likes;
        this.dislikes = dislikes;
        this.test = test;
    }
}
