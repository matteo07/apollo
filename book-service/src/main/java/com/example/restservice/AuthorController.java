package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class AuthorController {
  private static final Author[] authors = {
      new Author(1, "Kate", "Chopin", "Kate Chopin (1850–1904) was an American author known for her pioneering short stories and novels, particularly The Awakening (1899)."),
      new Author(2, "J.K.", "Rowling", "Joanne Rowling was born on July 31, 1965, in Yate, near Bristol, England. She grew up in England and in Chepstow, Gwent, Wales. She loved reading and wrote her first story at the age of six."),
      new Author(3, "Maccio", "Capatonda", "Marcello Macchia (born 2 August 1978) is an Italian comedian, actor, writer and filmmaker. He is best known by his stage name Maccio Capatonda"),
  };

  @GetMapping("/author/{id}")
  public Author author(@PathVariable long id) {
    System.out.println("GET author with ID:" + id);
    return Arrays.stream(authors).filter((author -> id == author.id())).findFirst().orElse(null);
  }
}
