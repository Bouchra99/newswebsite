package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Comment;
import com.example.newswebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<User,Comment> {
}
