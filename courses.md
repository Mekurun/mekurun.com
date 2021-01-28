---
layout: page
title: courses.title
permalink: /courses/
description: courses.description
categories:
  - scratch
  - minecraft
difficulty:
  - introduction
  - easy
  - normal
  - hard
---
{% for category in page.categories %}
<h2>{% t category.{{category}}.title %}</h2>
<ul class="all-courses-list-ul course-list">
{% assign courses = site.courses | where_exp:"c", "c.parent == nil and c.category == category" %}
{% for diff in page.difficulty %}
  {% assign diffcourses = courses | where_exp:"c", "c.difficulty == diff" %}
  {% for course in diffcourses %}
    {% assign course_lang = course.path | slice: 9, 2 %}
    {% if (course_lang == site.lang or (course_lang == 'ja' and site.lang == 'kana')) %}
    <li>
      <label class="course-simple" for="course-check-{{course.course-name}}">
      {% capture thumbnail %}{% if course.thumbnail %}{{ course.thumbnail }}{% else %}{{ course.slides[0] }}{% endif %}{% endcapture %}
      <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy" class="list-thumbnail">
      <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
      <div style="margin-top: auto;">
        <span class="top-course-list-difficulty {{ course.difficulty }}" style="margin-left: 0;"> {% t difficulty.{{ course.difficulty }} %} </span>
      </div>
      </label>
      <input type="checkbox" class="course-check" id="course-check-{{course.course-name}}">
      <div class="course-details">
        <label for="course-check-{{course.course-name}}" class="course-details-bg"></label>
        <div class="course-details-item">
          <label for="course-check-{{course.course-name}}" class="course-details-item-close"><i class="fas fa-times"></i></label>
          <div class="course-details-item-content">
            <div class="main-course">
              <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy" class="thumbnail">
              <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
              <div class="courses-diff-category">
              <span class="top-course-list-category {{course.category}}">{% t category.{{ course.category }}.title %}</span>
              <span class="top-course-list-difficulty {{ course.difficulty }}"> {% t difficulty.{{ course.difficulty }} %} </span>
              </div>
              <div class="main-buttons">
                <a href="{{ site.url }}/courses/{{ course.category }}/{{ course.course-name }}/" class="button btn-blue">
                コースをはじめる
                </a>
                <a href="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" download="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" class="button btn-white">
                PDFをダウンロード
                </a>
              </div>
            </div>
            <div class="">
              <section class="slide-page" id="subcourse">
                {% assign subcourses = site.courses | where_exp:"c",
                "c.parent == course.course-name" %}
                {% if subcourses.size > 0 %}
                <h2>{% t course.subcourse %}</h2>
                <ul class="course-list">
                {% for sc in subcourses %}
                {% assign course_lang = sc.path | slice: 9, 2 %}
                {% capture thumbnail %}{{ site.url }}/assets/course/{{ sc.category }}/{{ sc.parent }}/{{ sc.course-name }}{{ sc.thumbnail }}{% endcapture %}
                {% capture pdf %}{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/{{ sc.course-name }}/slide.pdf{% endcapture %}
                {% if course_lang == "ja" %}
                  <li class="card-list-item">
                    <img data-src="{{ thumbnail }}" data-width="212" alt="{{ sc.title }}" loading="lazy" class="thumbnail">
                    <p class="course-list-title">{{sc.title}}</p>
                    <div class="sub-buttons">
                      <a href="{{ site.baseurl }}{{sc.url}}" class="button btn-blue">コースをはじめる</a>
                      <a href="{{ pdf }}" download="{{ pdf }}" class="link-pdf-download">PDFをダウンロード</a>
                    </div>
                  </li>
                {% endif %}
                {% endfor %}
                </ul>
                {% endif %}
              </section>
            </div>
          </div>
        </div>
      </div>
    </li>
    {% endif %}
  {% endfor %}
{% endfor %}

</ul>
{% endfor %}
<style media="screen">
  .scratch { background: #ffb801 }
  .minecraft { background: #8bca31 }
  .normal { border-color: #ffb801 }
  .normal::before { color: #ffb801 }
  .easy{ border-color: #8bca31 }
  .easy::before { color: #8bca31 }
  .hard { border-color: #ff81ae }
  .hard::before { color: #ff81ae }
</style>
