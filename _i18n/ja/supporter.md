メクルンの活動は皆様のご支援で成り立っています。継続的な運営を応援いただければ幸いです。

## ご支援いただいた皆様(敬称略、順不同)
{: .supporter-h}

<div class="supporter-imgs">
{% for supporter in site.data.supporter.withicon %}
<div class="supporter-w-img">
<img data-src="/assets/images/supporter/{{supporter.img}}" alt="{{supporter.name}}" class="supporter-img">
<p class="supporter-w-img-name">{{supporter.name}}</p>
</div>
{% endfor %}
</div>

<div class="supporter-list">
{% for supporter in site.data.supporter.nameonly %}
<span>{{supporter.name}}</span>
{% endfor %}
</div>
