package com.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.demo.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Integer> {

	Role findByName(String name);
	
}
