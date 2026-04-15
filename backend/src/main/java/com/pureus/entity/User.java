package com.pureus.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String username;
    private String password;

    // getter setter
    public String getPassword() {
        return password;
    }
    public String getUsername() {
        return username;
    }
    public Integer getUser_id() {
        return user_id;
    }
}