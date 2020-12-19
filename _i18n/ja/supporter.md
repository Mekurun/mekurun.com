

## ご支援いただいた皆様
{: .supporter-h}
(敬称略、順不同)
{: .heading-sub}

<div class="supporter-imgs">
{% for supporter in site.data.supporter.withicon %}
<div class="supporter-w-img">
<img data-src="{{site.url}}/assets/images/supporter/{{supporter.img}}" alt="{{supporter.name}}" class="supporter-img">
<p class="supporter-w-img-name">{{supporter.name}}</p>
</div>
{% endfor %}
</div>

<div class="supporter-list">
{% for supporter in site.data.supporter.nameonly %}
<span>{{supporter.name}}</span>
{% endfor %}
</div>
