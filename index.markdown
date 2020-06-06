---
layout: page
title: title
---
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

<h2 id="newcourse">{% t top.recent %}</h2>
<ul class="top-course-list course-list">
{% assign courses = site.courses | limit:4 | where_exp:"c", "c.parent == nil" %}
{% for course in courses %}
  {% assign course_lang = course.path | slice: 9, 2 %}
  {% if course_lang == site.lang %}
  <li>
    <a href="{{course.url}}">
      <span class="top-course-list-category">{{ course.categories }}</span>
      <img src="/assets/course/{{ course.categories }}/{{ course.course-name }}{{ course.thumbnail }}" alt="{{ course.title }}" loading="lazy">
      {{ course.title }}
      <span class="top-course-list-difficulty"> {% t difficulty.{{ course.difficulty }} %} </span>
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>


<h2 id="projects">{% t top.projects %}</h2>
{% include articles.html category = 'projects' limit = 4 %} [{% t top.more %}](/projects)

<h2 id="projects">{% t top.tips %}</h2>
{% include articles.html category = 'tips' limit = 4 %} [{% t top.more %}](/tips)

<h2 id="projects">{% t top.news %}</h2>
{% include articles.html category = 'news' limit = 4 %} [{% t top.more %}](/news)
