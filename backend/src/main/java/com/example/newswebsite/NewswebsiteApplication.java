package com.example.newswebsite;

import com.example.newswebsite.model.Admin;
import com.example.newswebsite.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class NewswebsiteApplication {

	@Autowired
	private PasswordEncoder passwordEncoder ;

	@Autowired
	private AdminRepository adminRepository ;

	public static void main(String[] args) {
		SpringApplication.run(NewswebsiteApplication.class, args);
	}

	//@PostConstruct
	//void init(){
	//	Admin admin = new Admin("admin",passwordEncoder.encode("123"));

	//	adminRepository.save(admin);
	//}

}
