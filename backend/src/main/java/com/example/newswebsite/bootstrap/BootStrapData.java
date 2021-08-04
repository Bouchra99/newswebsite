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

        Article article1 = new Article("Politic","Biden Team Removes Tweet Showing Divided Morocco Map",
                "Amid Algerian declarations of a radical shift in US policy, the Biden administration removed all" +
                        " doubt by deleting the controversial post",
                "The social media team in charge of US President Joe Biden’s Twitter account has  deleted its controversial " +
                        "posts that caused online furore over the past 24 hours. The tweet showed Morocco’s map incorrectly, " +
                        "excluding southern provinces in Western Sahara, along with several other glaring errors.\n" +
                        "Biden shared a global map yesterday with a caption boasting about US vaccine donations after more " +
                        "than a year of vaccine hoarding. The tweet did not only make disingenuous claims about the US contribution to " +
                        "global vaccine access, it additionally showed a divided map of Morocco, claimed Crimea as Russian and neglected " +
                        "to feature most island nations.");
        Article article2 = new Article("Politic","Pegasus Affair: Morocco Takes Legal Action Against German Newspaper",
                "Morocco took similar legal proceedings against other websites publishing espionage allegations against the country",
                "Morocco has filed a lawsuit against German newspaper Suddeutsche Zeitung for promoting “false” allegations that accused Rabat of using the  Israeli Pegasus spyware."+
                "Morocco’s ambassador to Berlin Zohour Alaoui filed the complaint against the newspaper on Monday, state media reported."+
                "The legal request came after the German newspaper claimed that Morocco had “deployed” the espionage software to intercept the cellphones of many politicians, reporters, and others."+
                "Morocco has strongly denied the claims, affirming that it had never acquired nor used the Pegasus spyware."+
                "This is not the first time for Morocco to file a legal case against foreign publications accusing it of illegitimate spying."+
                "On July 22, Morocco also filed a defamation lawsuit against Amnesty International and Forbidden Stories."+
                "The two NGOs spearheaded the report that accused Morocco of using the Pegasus program, an accusation that was soon repeated by other international news outlets."+
                "Morocco filed further lawsuits on July 28, including one against French news outlet Le Monde and its director Jerome Fenoglio."+
                "Morocco has also filed legal proceedings against Mediapart and Radio France."+
                "At the beginning of the Pegasus claims, the Moroccan government issued a series of communiques in which it denounced the unrelenting " + "defamation campaign it has suffered at the hands of the Amnesty- and Forbidden Stories-led consortium of media organizations.");

        Article article3 = new Article("Politic","Morocco Denies Claims on Irregular Migration of 4 Auxiliary Forces to Ceuta",
                "Spanish media claimed the auxiliary forces also filed for asylum in Ceuta",
                "Rabat - Morocco's Ministry of Interior has denied reports that four members of the Moroccan auxiliary forces attempted to illegally enter the Spanish enclave of Ceuta."+
                        "In a statement released today, the ministry described the news published in Spanish media as 'unfounded and fake'."+
                        "It noted that an investigation was launched after a group of Spanish news outlets published reports suggesting that four members of Morocco’s auxiliary forces had swam their way to Ceuta and filed for asylum upon reaching the Spanish enclave."+
                        "Spanish news outlet El Confidential was among the Spanish news outlets that reported the news, citing unemployment and economic crisis in Morocco as the main reasons for the apparent increase in Spain-bound irregular migration."+
                        "In response to the claims, the Moroccan interior ministry accused the Spanish media of “misleading public opinion” with “unfounded and fake” reports.");

        Article article4 = new Article("Society","Ukraine’s SkyUp Changes Flight Attendant Uniform, Sets New Standard",
                "Ukraine’s biggest low-cost airline, SkyUp, announced a recent dress code change for female flight attendants.",
                "Ukraine’s biggest low-cost airline, SkyUp, announced a recent dress code change for female flight attendants.The airline company is to divert from the conventional “skirt and heels” uniform of female flight attendants in favor of comfort."+
                        "Female flight attendants are to now wear pantsuits and white Nike Air Max sneakers, instead of the customary high heels and skirts."+
                        "Uniforms for male flight attendants will remain unchanged, pending any future changes."+
                        "The new female staff’s uniform is the result of a collaboration with Ukrainian fashion brand GUDU."+
                        "In addition to the sneakers and a loose-fitting tangerine two-piece pantsuit, flight attendants will be given the option to wear a light trench coat or a silk handkerchief.");
        Article article5 = new Article("Society","Moroccans Among 394 Rescued Irregular Migrants near Tunisia",
                "International NGO workers have rescued 394 irregular migrants, including many Moroccans, from a drowning vessel off the Tunisian coast on August 1.",
                "International NGO workers have rescued 394 irregular migrants, including many Moroccans, from a drowning vessel off the Tunisian coast on August 1."+
                        "The boat was ”dangerously overcrowded,” it was “taking in water and its engine was not working,” reported Reuters. The rescue operation, which involved French NGO SOS Mediterranee, and the German NGOs Sea-Watch and ResQ Ship, occured in the early hours of Monday morning, and lasted for approximately six hours."+
                        "The French rescue ship Ocean Viking joined the German Sea-Watch 3 in rescuing the sinking vessel 68 kilometers off the Tunisian coast, in the vicinity of oil processing facilities and other commercial ships, according to Reuters."+
                        "Sea-Watch 3 rescued 141 survivors, while the French rescue ship collected the remaining survivors. At the time of the operation, it was unclear whether any migrants died or suffered severe injuries, according to Reuters’ sources, who described the migrants ship as “crammed with migrants on deck and inside the hull.");
        Article article6 = new Article("Society","Renowned Moroccan Actress Fatima Regragui Passed Away Aged 80",
                "As a leading actress in Moroccan theater, television, and film, she belonged to a generation of pioneers in the Moroccan entertainment industry, at a time when men were reluctant to pursue the profession.",
                "Moroccan actress Fatima Regragui passed away at 80 years old, early on Monday, August 2. The brother of the deceased confirmed the tragic news."+
                        "Fatima Regragui has long been recognized as a prominent figure in Moroccan art, entertainment, and culture."+
                        "Director Amin Ensour commented on the passing, through a post on his personal account on Facebook and saying 'the great artist Fatima Regragui is in the protection of God, may God’s mercy on her.'"+
                        "Fans and friends of director Amin Nsour immediately sent their condolences and prayers for the late artist.");

        articleRepository.save(article1);
        articleRepository.save(article2);
        articleRepository.save(article3);
        articleRepository.save(article4);
        articleRepository.save(article5);
        articleRepository.save(article6);
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
