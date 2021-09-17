package com.example.newswebsite.services;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public Article addNewArticle(Article article){
        return  articleRepository.save(article);
    }
    public void deleteOldArticle(Article article){
        articleRepository.delete(article);
    }

}
