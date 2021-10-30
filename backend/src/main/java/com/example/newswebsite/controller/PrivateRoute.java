package com.example.newswebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(CommentController.BASE_URL)
@CrossOrigin(origins = "http://localhost:3000")
public class PrivateRoute {

    private String BASE_URL = "/api/v2/" ;

   // @RequestMapping({"/authorized"})
    @GetMapping("/authorized")
    public boolean authorized(){
        return true ;
    }
}
