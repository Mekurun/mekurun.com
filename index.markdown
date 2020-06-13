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
  {% if (course_lang == site.lang or (course_lang == 'ja' and site.lang == 'kana')) %}
  <li>
    <a href="{{course.url}}">
      <span class="top-course-list-category">{% t category.{{ course.category }}.title %}</span>
      <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ course.thumbnail }}" data-width="300" alt="{{ course.title }}" loading="lazy">
      {% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}
      <span class="top-course-list-difficulty"> {% t difficulty.{{ course.difficulty }} %} </span>
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>

<h2 id="projects" class="post-list-heading">{% t top.projects %}<p class="post-list-more"><a href="/projects">{% t top.more %}</a></p></h2>
{% include articles.html category = 'projects' limit = 4 %}

<h2 id="tips" class="post-list-heading">{% t top.tips %}<p class="post-list-more"><a href="/tips">{% t top.more %}</a></p></h2>
{% include articles.html category = 'tips' limit = 4 %}

<h2 id="news" class="post-list-heading">{% t top.news %}<p class="post-list-more"><a href="/news">{% t top.more %}</a></p></h2>
{% include articles.html category = 'news' limit = 4 %}
