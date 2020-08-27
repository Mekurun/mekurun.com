---
layout: page
title: courses.title
permalink: /courses/
description: courses.description
---

<ul class="top-course-list course-list">
{% assign courses = site.courses | where_exp:"c", "c.parent == nil" %}
{% assign courses = courses | reverse %}
{% for course in courses %}
  {% assign course_lang = course.path | slice: 9, 2 %}
  {% if (course_lang == site.lang or (course_lang == 'ja' and site.lang == 'kana')) %}
  <li class="course-item">
    <label for="course-check-{{course.course-name}}">
    {% capture thumbnail %}{% if course.thumbnail %}{{ course.thumbnail }}{% else %}{{ course.slides[0] }}{% endif %}{% endcapture %}
    <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy">
    <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
    <span class="top-course-list-difficulty {{ course.difficulty }}"> {% t difficulty.{{ course.difficulty }} %} </span>
    </label>
    <input type="checkbox" class="course-check" id="course-check-{{course.course-name}}">
    <div class="course-details">
      <label for="course-check-{{course.course-name}}" class="course-details-bg"></label>
      <div class="course-details-item">
        <a href="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" download="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" class="download-pdf">
        ダウンロード
        </a>
      </div>
    </div>
  </li>
  {% endif %}
{% endfor %}
</ul>

<style media="screen">
  .normal::before {
    color: #ffb801;
  }
  .easy::before {
    color: #8bca31;
  }
  .hard::before {
    color: #ff81ae;
  }
</style>
