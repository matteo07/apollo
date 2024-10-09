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
      new Book(1, 1, "The Awakening", 1899),
      new Book(2, 1, "The Storm", 1902),
      new Book(3, 3, "Libro", 2020),
      new Book(4, 3, "Libro 2", 2022),
      new Book(5, 1, "Lmt enterprise", 1903),
      new Book(6, 2, "Harry Potter", 1997),
      new Book(7, 2, "Fantastic beasts", 2001),
      new Book(8, 1, "Invisible", 1904),
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
