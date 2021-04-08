package com.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.demo.domain.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	
	User findByEmail(String email);
	
}
