package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class AuthorController {
  private static final Author[] authors = {
      new Author(1, "Kate", "Chopin", "Some info about author's life"),
      new Author(2, "Paul", "Auster", "He was born on the same day he was born"),
      new Author(3, "Maccio", "Capatonda", "A few infos about Maccio's life"),
  };

  @GetMapping("/author/{id}")
  public Author author(@PathVariable long id) {
    System.out.println("GET author with ID:" + id);
    return Arrays.stream(authors).filter((author -> id == author.id())).findFirst().orElse(null);
  }
}
