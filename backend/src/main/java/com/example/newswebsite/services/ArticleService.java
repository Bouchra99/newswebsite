package com.example.newswebsite.services;


import com.example.newswebsite.model.Article;
import com.example.newswebsite.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository ;


    public List<Article> findAllArticles(){
        return articleRepository.findAll();
    }

    public Article findArticle(String id){
        return articleRepository.findById(id).orElseGet(Article::new);
    }

    public void saveArticle(Article article){
        articleRepository.save(article);
    }
    public void deleteArticle(String id){
        articleRepository.deleteById(id);
    }

}
