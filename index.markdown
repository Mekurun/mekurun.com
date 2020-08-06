---
layout: default
title: title
---
{% include header.html %}
<div class="top" style="height: auto;">
  <div class="top-text">
    <h1 class="top-copy">{% t top.copy %}</h1>
    <p>{% t top.caption %}</p>
    <p class="top-course-count">{% t top.all %}
    {% if site.lang != "kana" %}
      {% assign coursesWithLang = site.courses | where_exp:"item", "item.path contains site.lang" %}
    {% else %}
      {% assign coursesWithLang = site.courses | where_exp:"item", "item.path contains 'ja'" %}
    {% endif %}
    {{ coursesWithLang.size }} {% t top.courses %}<span style="opacity: 0.6;"> ・ </span>{{ site.posts.size }} {% t top.posts %}</p>
  </div>
  <img  data-src="{{ site.url }}/assets/images/mainvisual.svg" data-width="300" alt="メクルン" class="top-mainvisual">
</div>
<div class="main">
  <h2 id="allmenu">{% t top.allmenu %}</h2>
  <div class="list-category">
    {% for category in site.categories %}
    <a href="{{ site.baseurl }}{{category.permalink}}" class="list-category-one">
      <div class="list-category-img" style="background: #{{ category.color }};">
        <img data-src="{{ site.url }}/assets/images/{{category.categoryname}}.svg" alt="{% t category.title %}">
      </div>
      <div class="list-category-text">
        <h3 class="list-category-heading">{% t category.title %}</h3>
        <p style="margin-top:6px;">{% t category.{{category.categoryname}}.caption %}</p>
        <p class="list-category-link">{% t top.viewAll %}</p>
      </div>
    </a>
    {% endfor %}
  </div>
  <div>
    <h2 id="newcourse">{% t top.recent %}</h2>
    <ul class="top-course-list course-list">
    {% assign courses = site.courses | where_exp:"c", "c.parent == nil" %}
    {% assign courses = courses | reverse %}
    {% for course in courses limit:6 %}
      {% assign course_lang = course.path | slice: 9, 2 %}
      {% if (course_lang == site.lang or (course_lang == 'ja' and site.lang == 'kana')) %}
      <li>
        <a href="{{ site.baseurl }}{{course.url}}">
          <span class="top-course-list-category">{% t category.{{ course.category }}.title %}</span>
          {% capture thumbnail %}{% if course.thumbnail %}{{ course.thumbnail }}{% else %}{{ course.slides[0] }}{% endif %}{% endcapture %}
          <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy">
          <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
          <span class="top-course-list-difficulty {{ course.difficulty }}"> {% t difficulty.{{ course.difficulty }} %} </span>
        </a>
      </li>
      {% endif %}
    {% endfor %}
    </ul>
  </div>

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

<!--
  <h2 id="projects" class="post-list-heading">{% t projects.title %}<p class="post-list-more"><a href="/projects">{% t top.more %}</a></p></h2>
  {% include articles.html category = 'projects' limit = 4 %}
-->
  <div>
    <h2 id="tips" class="post-list-heading">{% t tips.title %}<p class="post-list-more"><a href="/tips/">{% t top.more %}</a></p></h2>
    {% include articles.html category = 'tips' limit = 3 %}
  </div>
  <div>
    <h2 id="news" class="post-list-heading">{% t news.title %}<p class="post-list-more"><a href="/news/">{% t top.more %}</a></p></h2>
    {% include articles.html category = 'news' limit = 4 %}
  </div>
</div>


{% include footer.html %}
