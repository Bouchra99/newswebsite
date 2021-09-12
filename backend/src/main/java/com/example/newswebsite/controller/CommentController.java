package com.example.newswebsite.controller;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.model.Comment;
import com.example.newswebsite.services.ArticleService;
import com.example.newswebsite.services.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(CommentController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    public static final String BASE_URL = "/api/v2/comments";
    private final CommentService commentService ;
    private final ArticleService articleService;

    public CommentController(CommentService commentService,ArticleService articleService) {
        this.commentService = commentService;
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<?> getComments(){
        List<Comment> listOfComments = commentService.findAllComments();
        return ResponseEntity.ok(listOfComments);
    }
//    @PostMapping("/add")
//    public Comment addComment(@RequestBody Comment comment){
//        return commentService.addNewComment(comment);
//    }
    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody Comment comment){
        Comment newComment = commentService.addNewComment(comment);
        return ResponseEntity.ok(newComment);
    }
}
