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


    public CommentController(CommentService commentService) {
        this.commentService = commentService;

    }

    //------Get All comments------------------
    @GetMapping
    public ResponseEntity<?> getComments(){
        List<Comment> listOfComments = commentService.findAllComments();
        return ResponseEntity.ok(listOfComments);
    }

    // ------ add a new comment ---------------
    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody Comment comment){
        Comment newComment = commentService.addNewComment(comment);
        return ResponseEntity.ok(newComment);
    }

    // ------ update likes and dislikes -------
    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateComment(@PathVariable Long id,@RequestBody Comment comment){
        Comment updatedComment = commentService.addNewComment(comment);
        return  ResponseEntity.ok(updatedComment);
    }
}
