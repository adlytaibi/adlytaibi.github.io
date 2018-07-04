---
layout: frontpage
title: Adly Taibi
tagline: website with GitHub Pages
description: website with GitHub Pages
---
{% include JB/setup %}

{% for post in site.posts %}
  <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

