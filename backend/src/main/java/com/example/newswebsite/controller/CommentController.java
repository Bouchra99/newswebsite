package com.example.newswebsite.controller;

import com.example.newswebsite.model.Comment;
import com.example.newswebsite.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(CommentController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    public static final String BASE_URL = "/api/v2";
    @Autowired
    private CommentService commentService ;

    @GetMapping("/comments")
    public List<Comment> getAllComments(){
        return commentService.findAllComments();
    }

    @PostMapping("/comments/add")
    public void addComment(@RequestBody Comment comment){
        commentService.saveComment(comment);
    }

    @PostMapping("/comments/update/{id}")
    public void updateComment(@PathVariable String id,@RequestBody Comment comment){
        commentService.updateComment(id,comment);
    }

    @GetMapping("/admin/comment/{id}")
    public void deleteComment(@PathVariable String id){
        commentService.deleteComment(id);
    }

}
