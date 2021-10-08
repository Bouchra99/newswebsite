package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ArticleRepository extends MongoRepository<Article,String> {

}
