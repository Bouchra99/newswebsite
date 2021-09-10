package com.example.newswebsite.controller;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.model.Comment;
import com.example.newswebsite.services.ArticleService;
import com.example.newswebsite.services.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(CommentController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    public static final String BASE_URL = "/api/v2/comments";
    private final CommentService commentService ;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public ResponseEntity<?> getComments(){
        List<Comment> listOfArticles = commentService.findAllComments();
        return ResponseEntity.ok(listOfArticles);
    }
}
