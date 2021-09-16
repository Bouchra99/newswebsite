package com.example.newswebsite.services;

import com.example.newswebsite.model.Comment;
import com.example.newswebsite.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService{

    @Autowired
    private CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> findAllComments(){
        return commentRepository.findAll();
    }
    public Comment findCommentById(Long id){
        return commentRepository.findById(id).get();
    }
    public Comment addNewComment(Comment comment){
        return commentRepository.save(comment);
    }
}
