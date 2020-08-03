---
layout: page
title: news.title
permalink: /news/
description: news.description
copy: news.copy
---
{% translate_file news.md %}
{% include articles.html category = 'news' %}
