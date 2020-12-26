## ご支援プラン

<div class="support-plans">
{% for plan in site.data.support_plan %}
<div class="support-plan">
  <img data-src="{{site.url}}/assets/images/supporter/return/{{plan.price}}.png" alt="{{plan.price}}円プラン" style="border-radius: 5px;">
  <h3 class="support-plan-price">{{plan.price}}<span class="support-plan-unit">円 / 月</span></h3>
  <ul class="support-plan-ul">
    {% for desc in plan.description %}
      <li>{{ desc }}</li>
    {% endfor %}
  </ul>
  <a href="{{plan.url}}" target="_blank" rel="noopener" class="sub-button support-plan-button">この特典を選ぶ</a>
</div>
{% endfor %}
</div>

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
