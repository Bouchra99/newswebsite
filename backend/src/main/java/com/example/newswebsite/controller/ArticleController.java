package com.example.newswebsite.controller;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.services.ArticleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ArticleController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController{
    public static final String BASE_URL = "/api/v2/articles";
    private final ArticleService articleService ;


    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<?> getArticles(){
        List<Article> listOfArticles = articleService.findAllArticles();
        return ResponseEntity.ok(listOfArticles);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getArticleById(@PathVariable Long id){
        Article article = articleService.findArticleById(id);
        return ResponseEntity.ok(article);
    }

//    @GetMapping
//    List<Article> getArticles(){
//        return articleService.findAllArticles();
//    }


}

