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
  <li class="card-list-item">
    <label for="course-check-{{course.course-name}}">
    {% capture thumbnail %}{% if course.thumbnail %}{{ course.thumbnail }}{% else %}{{ course.slides[0] }}{% endif %}{% endcapture %}
    <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy">
    <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
    <span class="top-course-list-difficulty {{ course.difficulty }}"> {% t difficulty.{{ course.difficulty }} %} </span>
    </label>
    <input type="checkbox" class="course-check" id="course-check-{{course.course-name}}">
    <div class="course-details">
      <label for="course-check-{{course.course-name}}" class="course-details-bg"></label>
      <div class="course-details-item card-list-item">
        <label for="course-check-{{course.course-name}}">X</label>
        <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy">
        <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
        <span>{% t category.{{ course.category }}.title %}</span><span class="top-course-list-difficulty {{ course.difficulty }}"> {% t difficulty.{{ course.difficulty }} %} </span>
        <a href="{{ site.url }}/{{ course.category }}/{{ course.course-name }}/" class="download-pdf">
        コースページを開く
        </a>
        <a href="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" download="{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/slide.pdf" class="download-pdf">
        PDFをダウンロード
        </a>
        <div class="">
          <section class="slide-page" id="subcourse">
            {% assign subcourses = site.courses | where_exp:"c",
            "c.parent == course.course-name" %}
            {% if subcourses.size > 0 %}
            <a href="#subcourse" style="text-decoration:none;"><h2>{% t course.subcourse %} <i class="fas fa-angle-down"></i></h2></a>
            <ul class="course-list">
            {% for sc in subcourses %}
            {% assign course_lang = sc.path | slice: 9, 2 %}
            {% capture thumbnail %}{{ site.url }}/assets/course/{{ sc.category }}/{{ sc.parent }}/{{ sc.course-name }}{{ sc.thumbnail }}{% endcapture %}
            {% capture pdf %}{{ site.baseurl }}/assets/course/scratch/{{course.course-name}}/{{ sc.course-name }}/slide.pdf{% endcapture %}
            {% if course_lang == "ja" %}
              <li class="card-list-item">
                <img data-src="{{ thumbnail }}" data-width="212" alt="{{ sc.title }}" loading="lazy">
                <p class="course-list-title">{{sc.title}}</p>
                <a href="{{ site.baseurl }}{{sc.url}}">コースページを開く</a>
                <a href="{{ pdf }}" download="{{ pdf }}" class="download-pdf">
                PDFをダウンロード
                </a>
              </li>
            {% endif %}
            {% endfor %}
            </ul>
            {% endif %}
          </section>
        </div>
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
