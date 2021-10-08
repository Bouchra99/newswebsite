package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<Comment,String> {
}
