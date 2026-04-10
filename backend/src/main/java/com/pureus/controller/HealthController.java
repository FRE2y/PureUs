package com.pureus.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class HealthController {

    @GetMapping("/health")
    public String health() {
        return "server is running";
    }
}