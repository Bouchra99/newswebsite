package com.example.newswebsite.services;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;



@Service

public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;


    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Article findArticleById(Long Id){
        return  articleRepository.findById(Id).get();
    }

    public List<Article> findAllArticles(){
        return  articleRepository.findAll();
    }

}
