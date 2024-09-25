package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class BookController {

  private static final Book[] books = {
      new Book(1, 1, "The Awakening"),
      new Book(2, 2, "Paul Auster"),
      new Book(3, 3, "Libbro"),
      new Book(4, 3, "Un libro"),
      new Book(5, 1, "Lmt enterprise"),
      new Book(6, 3, "Harry Potter"),
      new Book(7, 3, "Paura Potter?"),
  };

  @GetMapping("/book")
  public Book[] books(@RequestParam(required = false) List<Long> ids, @RequestParam(required = false) Long authorId) throws InterruptedException {
    System.out.println("GET books" + ids + authorId);
    Thread.sleep(1200);
    if (authorId != null) {
      return Arrays.stream(books).filter((book -> authorId.equals(book.author()))).toArray(Book[]::new);
    }
    if (ids == null || ids.isEmpty()) {
      return books;
    }
    return Arrays.stream(books).filter((book -> ids.contains(book.id()))).toArray(Book[]::new);
  }

  @GetMapping("/book/{id}")
  public Book book(@PathVariable long id) {

    System.out.println("GET book with ID:" + id);
    return Arrays.stream(books).filter((book -> id == book.id())).findFirst().orElse(null);
  }
}
