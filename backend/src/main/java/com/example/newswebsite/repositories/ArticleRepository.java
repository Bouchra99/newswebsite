package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;


@Repository
public interface ArticleRepository extends MongoRepository<Article,String> {

}
