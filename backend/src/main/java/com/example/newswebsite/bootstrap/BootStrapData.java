package com.example.newswebsite.bootstrap;

import com.example.newswebsite.model.Article;
import com.example.newswebsite.model.Author;
import com.example.newswebsite.model.User;
import com.example.newswebsite.repositories.ArticleRepository;
import com.example.newswebsite.repositories.AuthorRepository;
import com.example.newswebsite.repositories.UserRepository;

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

        Article article1 = new Article("Biden Team Removes Tweet Showing Divided Morocco Map",
                "Amid Algerian declarations of a radical shift in US policy, the Biden administration removed all" +
                        " doubt by deleting the controversial post",
                "The social media team in charge of US President Joe Biden’s Twitter account has  deleted its controversial " +
                        "posts that caused online furore over the past 24 hours. The tweet showed Morocco’s map incorrectly, " +
                        "excluding southern provinces in Western Sahara, along with several other glaring errors.\n" +
                        "Biden shared a global map yesterday with a caption boasting about US vaccine donations after more " +
                        "than a year of vaccine hoarding. The tweet did not only make disingenuous claims about the US contribution to " +
                        "global vaccine access, it additionally showed a divided map of Morocco, claimed Crimea as Russian and neglected " +
                        "to feature most island nations.");
        Article article2 = new Article("Biden Team Removes Tweet Showing Divided Morocco Map",
                "Amid Algerian declarations of a radical shift in US policy, the Biden administration removed all" +
                        " doubt by deleting the controversial post",
                "The social media team in charge of US President Joe Biden’s Twitter account has  deleted its controversial " +
                        "posts that caused online furore over the past 24 hours. The tweet showed Morocco’s map incorrectly, " +
                        "excluding southern provinces in Western Sahara, along with several other glaring errors.\n" +
                        "Biden shared a global map yesterday with a caption boasting about US vaccine donations after more " +
                        "than a year of vaccine hoarding. The tweet did not only make disingenuous claims about the US contribution to " +
                        "global vaccine access, it additionally showed a divided map of Morocco, claimed Crimea as Russian and neglected " +
                        "to feature most island nations.");
        Article article3 = new Article("Biden Team Removes Tweet Showing Divided Morocco Map",
                "Amid Algerian declarations of a radical shift in US policy, the Biden administration removed all" +
                        " doubt by deleting the controversial post",
                "The social media team in charge of US President Joe Biden’s Twitter account has  deleted its controversial " +
                        "posts that caused online furore over the past 24 hours. The tweet showed Morocco’s map incorrectly, " +
                        "excluding southern provinces in Western Sahara, along with several other glaring errors.\n" +
                        "Biden shared a global map yesterday with a caption boasting about US vaccine donations after more " +
                        "than a year of vaccine hoarding. The tweet did not only make disingenuous claims about the US contribution to " +
                        "global vaccine access, it additionally showed a divided map of Morocco, claimed Crimea as Russian and neglected " +
                        "to feature most island nations.");

        articleRepository.save(article1);
        articleRepository.save(article2);
        articleRepository.save(article3);
//        articleRepository.save(article4);
//        articleRepository.save(article5);
//        articleRepository.save(article6);
//        articleRepository.save(article7);
//        articleRepository.save(article8);
//        articleRepository.save(article9);
//        articleRepository.save(article10);
//        articleRepository.save(article11);
//        articleRepository.save(article12);
//        articleRepository.save(article13);
//        articleRepository.save(article14);



//        Author author = new Author("bouch","MH");

//        article1.setAuthor(author1);
//        article2.setAuthor(author1);
//        author1.getArticles().add(article1);
//        author1.getArticles().add(article2);



//        authorRepository.save(author1);

        System.out.println("articles saved "+articleRepository.count());
        System.out.println("authors saved "+authorRepository.count());
//
//        User user = new User("bouch","123456");
//        User user2 = new User("bouch2","1234565");
//        User user3 = new User("bouch3","4445554");
//
//        userRepository.save(user);
//        userRepository.save(user2);
//        userRepository.save(user3);
//
//        System.out.println("users saved "+userRepository.count());


    }
}
