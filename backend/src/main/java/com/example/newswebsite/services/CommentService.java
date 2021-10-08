package com.example.newswebsite.services;



import com.example.newswebsite.model.Comment;
import com.example.newswebsite.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository ;

    public List<Comment> findAllComments(){
        return commentRepository.findAll();
    }
    public void saveComment(Comment comment){
        commentRepository.save(comment);
    }
    public void updateComment(String id,Comment comment){
        Comment ucomment = commentRepository.findById(id).get();
        ucomment.setLikes(comment.getLikes());
        ucomment.setDislikes(comment.getDislikes());
        commentRepository.save(ucomment);
    }
    public void deleteComment(String id){
        commentRepository.deleteById(id);
    }
}
