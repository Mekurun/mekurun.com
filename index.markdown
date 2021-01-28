---
layout: default
title: title
---
{% include header.html %}
<div class="top" style="height: auto;">
  <div class="top-text">
    <h1 class="top-copy">{% t top.copy %}</h1>
    <p style="margin-bottom:6px;">{% t top.caption %}</p>
    <p class="top-course-count">{% t top.all %}
    {% if site.lang != "kana" %}
      {% assign coursesWithLang = site.courses | where_exp:"item", "item.path contains site.lang" %}
    {% else %}
      {% assign coursesWithLang = site.courses | where_exp:"item", "item.path contains 'ja'" %}
    {% endif %}
    {{ coursesWithLang.size }} {% t top.courses %}<span style="opacity: 0.6;"> ・ </span>{{ site.posts.size }} {% t top.posts %}</p>
    <a href="{{ site.baseurl }}/courses/" class="button-round" style="margin-top: 8px;display: inline-block;">コースをさがす</a>
  </div>
  <img  data-src="{{ site.url }}/assets/images/mainvisual.svg" data-width="300" alt="メクルン" class="top-mainvisual">
</div>
<div class="main" id="allmenu">
  <div id="newcourse">
    <h2>{% t top.recent %}</h2>
    <ul class="top-course-list course-list">
    {% assign courses = site.courses | where_exp:"c", "c.parent == nil" %}
    {% assign courses = courses | reverse %}
    {% for course in courses limit:6 %}
      {% assign course_lang = course.path | slice: 9, 2 %}
      {% if (course_lang == site.lang or (course_lang == 'ja' and site.lang == 'kana')) %}
      <li>
        <a href="{{ site.baseurl }}{{course.url}}" class="card-list-item">
          {% capture thumbnail %}{% if course.thumbnail %}{{ course.thumbnail }}{% else %}{{ course.slides[0] }}{% endif %}{% endcapture %}
          <img data-src="{{ site.url }}/assets/course/{{ course.category }}/{{ course.course-name }}{{ thumbnail }}" data-width="348" alt="{{ course.title }}" loading="lazy">
          <p class="course-list-title">{% if site.lang == 'kana' and course.title-kana %}{{course.title-kana}}{% else %}{{course.title}}{% endif %}</p>
          <div style="margin-top: auto;"><span class="top-course-list-category {{course.category}}">{% t category.{{ course.category }}.title %}</span><span class="top-course-list-difficulty {{ course.difficulty }}">{% t difficulty.{{ course.difficulty }} %}</span></div>
        </a>
      </li>
      {% endif %}
    {% endfor %}
    </ul>
  </div>

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

<!--
  <h2 id="projects" class="post-list-heading">{% t projects.title %}<p class="post-list-more"><a href="/projects">{% t top.more %}</a></p></h2>
  {% include articles.html category = 'projects' limit = 4 %}
-->
  {% if site.lang == "ja" %}
  <div id="tips">
    <h2 class="post-list-heading">{% t tips.title %}<span class="post-list-more"><a href="/tips/">{% t top.more %}</a></span></h2>
    {% include articles.html category = 'tips' limit = 3 %}
  </div>
  {% endif %}
  <div id="news">
    <h2 class="post-list-heading">{% t news.title %}<span class="post-list-more"><a href="/news/">{% t top.more %}</a></span></h2>
    {% include articles.html category = 'news' limit = 4 %}
  </div>
</div>

{% include support.html %}
{% include footer.html %}
