package com.example.newswebsite.repositories;

import com.example.newswebsite.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article,Long> {


    ArticleRepository articleRepository = new ArticleRepository() {
        @Override
        public List<Article> findAll() {
            return null;
        }

        @Override
        public List<Article> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<Article> findAllById(Iterable<Long> iterable) {
            return null;
        }

        @Override
        public <S extends Article> List<S> saveAll(Iterable<S> iterable) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends Article> S saveAndFlush(S s) {
            return null;
        }

        @Override
        public <S extends Article> List<S> saveAllAndFlush(Iterable<S> iterable) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<Article> iterable) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Long> iterable) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public Article getOne(Long aLong) {
            return null;
        }

        @Override
        public Article getById(Long aLong) {
            return null;
        }

        @Override
        public <S extends Article> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends Article> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<Article> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends Article> S save(S entity) {
            return null;
        }

        @Override
        public Optional<Article> findById(Long aLong) {
            return Optional.empty();
        }

        @Override
        public boolean existsById(Long aLong) {
            return false;
        }

        @Override
        public long count() {
            return 0;
        }

        @Override
        public void deleteById(Long aLong) {

        }

        @Override
        public void delete(Article entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Long> longs) {

        }

        @Override
        public void deleteAll(Iterable<? extends Article> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends Article> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends Article> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends Article> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends Article> boolean exists(Example<S> example) {
            return false;
        }
    } ;


//    public static List<Article> getLatestArticles(){
//        List<Article> latestArticles = new ArrayList<>();
//        Long i = (Long)articleRepository.count();
//
//        for(Long j=i ; j> (i-12) ;i--){
//            latestArticles.add(articleRepository.findById(j).get());
//        }
//        return latestArticles;
//    }

}
