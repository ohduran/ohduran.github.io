---
layout: reading
title: Reading
permalink: /reading/
---
{% assign tag_names = '' %}
{% for tag in site.tags %}
{% assign tag_name = tag | first | capitalize %}
{% unless tag_name == 'Yule book flood' %}
{% assign tag_names = tag_names | append: " " | append: tag_name %}
{% endunless %}
{% endfor %}
{% assign tag_names = tag_names | split:" " %}

Like Groucho, I find television very educating: every time somebody turns on the set, I go into the other room and read a book.

But I don't read for the sake of it; I want to learn something. That's why I've selected books that helped me learn more about different topics: {{ tag_names | array_to_sentence_string: "or"}}.

I also follow a fascinating Icelandic tradition of spending time reading on Christmas Eve called [Yule Book Flood](https://en.wikipedia.org/wiki/J%C3%B3lab%C3%B3kafl%C3%B3%C3%B0), so I have written condensed notes under that topic.

I really hope that you enjoy these notes.
