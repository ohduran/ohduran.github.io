---
layout: section
title: Journal
permalink: /journal
---
{% assign posts = site.journal %}
{% include page/01-hero.html posts=posts %}
{% include page/02-test.html posts=posts %}
{% include page/03-latest.html posts=posts sorting="date" %}
