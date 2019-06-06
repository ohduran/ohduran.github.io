---
layout: section
title: Books & Fiction
permalink: /books
---
{% assign posts = site.books %}
{% include page/01-hero.html posts=posts %}
{% include page/02-test.html posts=posts %}
{% include page/03-latest.html posts=posts sorting="rating" %}
