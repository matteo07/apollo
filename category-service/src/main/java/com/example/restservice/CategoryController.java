package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class CategoryController {
  private static final Category[] CATEGORIES = {
      new Category("fantasy", "Fantasy", "These books are full of fantasy, much for you", new Integer[]{1, 2, 3}),
      new Category("horror", "Horror", "These are books much scary, aaaaahh!", new Integer[]{4, 2, 5, 6}),
      new Category("comedy", "Comedy", "These are funny, lol!", new Integer[]{3, 6}),
      new Category("romance", "Romance", "These are much lovely!", new Integer[]{2, 4, 6}),
  };

  @GetMapping("/category/{slug}")
  public Category category(@PathVariable String slug) throws InterruptedException {

    Thread.sleep(900);
    System.out.println("GET category with slug: " + slug);
    return Arrays.stream(CATEGORIES).filter((category -> slug.equals(category.slug()))).findFirst().orElse(null);
  }

  @GetMapping("/category")
  public Category[] categories() {
    System.out.println("GET categories");
    return CATEGORIES;
  }
}
