---
layout: page
---

<ul class="top-course-list course-list">
{% for course in site.posts limit:4 %}
<li><a href="{{course.url}}"><span>{{ course.categories }}</span><img src="/assets/course/{{ course.categories }}/{{ course.course-name }}{{ course.slides[0] }}" alt="{{ course.title }}">{{ course.title }} <span> {% t difficulty.{{ course.difficulty }} %} </span></a></li>
{% endfor %}
</ul>

<div class="list-category">
  <a href="/scratch" class="list-category-one">
    <h3>{% t category.scratch.title %}</h3>
    <p>{% t category.scratch.description %}</p>
  </a>
</div>
