---
layout: page
---
<ul>
{% for lesson in site.posts %}
<li><a href="{{lesson.url}}">{{lesson.title}}</a></li>
{% endfor %}
</ul>

<div class="list-category">
  <a href="/scratch" class="list-category-one">
    <h3>{% t category.scratch.title %}</h3>
    <p>{% t category.scratch.description %}</p>
  </a>
</div>
