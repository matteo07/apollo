package com.example.restservice;

public record Recommendation(long id, String title, String description, Integer[] items) {
}
