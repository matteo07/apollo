package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class BookController {

  private static final Book[] books = {
      new Book(1, 1, "The Awakening"),
      new Book(2, 2, "Paul Auster"),
      new Book(3, 3, "Libro"),
  };

  @GetMapping("/books")
  public Book[] books() {
    System.out.println("GET books");
    return books;
  }

  @GetMapping("/book/{id}")
  public Book book(@PathVariable long id) {

    System.out.println("GET book with ID:" + id);
    return Arrays.stream(books).filter((book -> id == book.id())).findFirst().orElse(null);
  }
}
