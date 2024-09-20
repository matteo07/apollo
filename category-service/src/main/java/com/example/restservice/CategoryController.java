package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class CategoryController {
  private static final Category[] CATEGORIES = {
      new Category("fantasy", "Fantasy books", "These books are full of fantasy reccomended for you", new Integer[]{1, 2, 3}),
      new Category("horror", "Horror books", "These are books much scary, aaaaahh!", new Integer[]{4, 2, 5, 6}),
  };

  @GetMapping("/category/{slug}")
  public Category category(@PathVariable String slug) {

    System.out.println("GET category with slug: " + slug);
    return Arrays.stream(CATEGORIES).filter((category -> slug.equals(category.slug()))).findFirst().orElse(null);
  }

  @GetMapping("/category")
  public Category[] categories() {
    System.out.println("GET categories");
    return CATEGORIES;
  }
}
