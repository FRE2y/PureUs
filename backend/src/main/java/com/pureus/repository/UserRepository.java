package com.pureus.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.pureus.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}