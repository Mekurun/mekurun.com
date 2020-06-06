---
layout: page
title: top.title
---
<h2 id="newcourse">{% t top.recent %}</h2>
<ul class="top-course-list course-list">
{% assign courses = site.posts limit:4 | where_exp:"c",
"c.parent == nil" %}
{% for course in courses %}
  <li>
    <a href="{{course.url}}">
      <span class="top-course-list-category">{{ course.categories }}</span>
      <img src="/assets/course/{{ course.categories }}/{{ course.course-name }}{{ course.thumbnail }}" alt="{{ course.title }}" loading="lazy">
      {{ course.title }}
      <span class="top-course-list-difficulty"> {% t difficulty.{{ course.difficulty }} %} </span>
    </a>
  </li>
{% endfor %}
</ul>

<h2 id="allmenu">{% t top.allmenu %}</h2>
<div class="list-category">
  {% for category in site.categories %}
  <a href="{{ site.baseurl }}{{category.permalink}}" class="list-category-one">
    <h3>{% t category.title %}</h3>
    <p>{% t category.{{category.categoryname}}.caption %}</p>
    <p class="list-category-link">一覧を見る</p>
  </a>
  {% endfor %}
</div>
