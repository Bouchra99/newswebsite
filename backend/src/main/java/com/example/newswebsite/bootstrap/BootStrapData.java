package com.example.newswebsite.bootstrap;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.model.Author;
import com.example.newswebsite.model.User;
import com.example.newswebsite.repositories.ArticleRepository;
import com.example.newswebsite.repositories.AuthorRepository;
import com.example.newswebsite.repositories.UserRepository;
import lombok.Data;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private ArticleRepository articleRepository;
    private AuthorRepository authorRepository;
    private UserRepository userRepository;

    public BootStrapData(ArticleRepository articleRepository, AuthorRepository authorRepository,
                         UserRepository userRepository) {
        this.articleRepository = articleRepository;
        this.authorRepository = authorRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Article article1 = new Article("article1","text text text text text text ....");
        Article article2 = new Article("article2","text text text text text text ....");
        Author author1 = new Author("bouch","MH");

        article1.setAuthor(author1);
        article2.setAuthor(author1);
        author1.getArticles().add(article1);
        author1.getArticles().add(article2);

        articleRepository.save(article1);
        articleRepository.save(article2);

        authorRepository.save(author1);

        System.out.println("articles saved "+articleRepository.count());
        System.out.println("authors saved "+authorRepository.count());

        User user = new User("bouch","123456");
        User user2 = new User("bouch2","1234565");
        User user3 = new User("bouch3","4445554");

        userRepository.save(user);
        userRepository.save(user2);
        userRepository.save(user3);

        System.out.println("users saved "+userRepository.count());


    }
}
