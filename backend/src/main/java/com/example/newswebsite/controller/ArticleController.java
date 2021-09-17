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
    public static final String BASE_URL = "/api/v2";
    private final ArticleService articleService ;



    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;

    }

    /*-------Get All Articles --------------*/
    @GetMapping("/articles")
    public ResponseEntity<?> getArticles(){
        List<Article> listOfArticles = articleService.findAllArticles();
        return ResponseEntity.ok(listOfArticles);
    }
    /*-------Get Article By ID--------------*/
    @GetMapping("/articles/{id}")
    public ResponseEntity<?> getArticleById(@PathVariable Long id){
        Article article = articleService.findArticleById(id);
        return ResponseEntity.ok(article);
    }

    /*-------Add article---------------*/
    @PostMapping("/admin/add")
    public ResponseEntity<?> addArticle(@RequestBody Article article){
        Article newArticle = articleService.addNewArticle(article);
        return ResponseEntity.ok(newArticle);
    }

    /*-------Delete Article------------*/
    @GetMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long id){
        Article article = articleService.findArticleById(id);
        articleService.deleteOldArticle(article);
        return ResponseEntity.ok(article);
    }




}

