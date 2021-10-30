package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends MongoRepository<Admin,String> {
    Admin findByUsername(String username) ;


}
