package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class RecommendationController {

  private static final Recommendation[] RECOMMENDATIONS = {
      new Recommendation(1, "For you", "These books base on what you've read", new Integer[]{1, 2, 3, 4, 6, 7}),
      new Recommendation(2, "Most popular", "These books base on what you've read", new Integer[]{2, 3, 5, 6}),
      new Recommendation(3, "Most recent", "These books have been published recently", new Integer[]{1, 4, 5, 6, 7}),
  };

  @GetMapping("/recommendation")
  public Recommendation[] recommendations() throws InterruptedException {
    System.out.println("GET recommendations");

    Thread.sleep(500);
    return RECOMMENDATIONS;
  }

  @GetMapping("/recommendation/{id}")
  public Recommendation recommendation(@PathVariable long id) {

    System.out.println("GET recommendation with ID:" + id);
    return Arrays.stream(RECOMMENDATIONS).filter((recommendation -> id == recommendation.id())).findFirst().orElse(null);
  }
}
