package com.example.newswebsite.controller;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(ArticleController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {
    public static final String BASE_URL = "/api/v2";

    @Autowired
    private ArticleService articleService ;



    // ------ Get All Articles ---------
    @GetMapping("/articles")
    public List<Article> getAllArticles(){
        return articleService.findAllArticles();
    }



    // ------ Get article By Id ---------
    @GetMapping("articles/{id}")
    public Article getArticle(@PathVariable String id){
        return articleService.findArticle(id);
    }

    // ------ Add a new Article ---------
    @PostMapping("/admin/add")
    public void addArticle(@RequestBody Article article){
        articleService.saveArticle(article);
    }

    // ------ Delete Article ------------
    @GetMapping("/admin/delete/{id}")
    public void deleteArticle(@PathVariable String id){
        articleService.deleteArticle(id);
    }

}