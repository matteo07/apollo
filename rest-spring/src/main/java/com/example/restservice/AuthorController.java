package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class AuthorController {
    private static final Author[] authors = {
            new Author(1, "Kate", "Chopin"),
            new Author(2, "Paul", "Auster"),
            new Author(3, "Maccio", "Capatonda"),
    };

    @GetMapping("/author/{id}")
    public Author author(@PathVariable long id) {
        System.out.println("GET author with ID:" + id);
        return Arrays.stream(authors).filter((author -> id == author.id())).findFirst().orElse(null);
    }
}
