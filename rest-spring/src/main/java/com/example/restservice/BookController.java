package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class BookController {

    private static final Book[] books = {
            new Book(1, "Kate Chopin", "The Awakening"),
            new Book(2, "City of Glass", "Paul Auster"),
            new Book(3, "Maccio Capatonda", "Libro"),
    };
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/books")
    public Book[] books() {
        return books;
    }

    @GetMapping("/book/{id}")
    public Book book(@PathVariable long id) {
        return Arrays.stream(books).filter((book -> id == book.id())).findFirst().orElse(null);
    }
}
