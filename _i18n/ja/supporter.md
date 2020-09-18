メクルンの活動は皆様のご支援で成り立っています。継続的な運営を応援いただければ幸いです。<br class="ph-ignore">
ご支援いただいた資金は、メクルンを通して「つくる楽しさ」をより多くの子ども達に届ける活動に使わせていただきます。
{: style="text-align:center"}

<a href="https://community.camp-fire.jp/projects/view/322690" class="support-button-header button btn-blue btn-article" target="_blank" rel="nofollow noreferrer noopener">支援ページへ</a>

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
