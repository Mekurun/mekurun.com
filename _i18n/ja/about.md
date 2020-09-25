<section class="feature">
  <div class="feature-one">
    <img data-src="{{site.url}}/assets/images/courses.png" alt="選んでつくれる">
    <div class="feature-text">
      <h3>選んでつくれる豊富なコース</h3>
      <p>
        お絵かきや音楽、ゲームなど、さまざまなジャンルのコースから、好きなものを選んで学習できます。メインコースで作品を作ったら、さらに拡張する「サブコース」で自由に要素を組み込んでみましょう。
      </p>
    </div>
  </div>
  <div class="feature-one">
    <img data-src="{{site.url}}/assets/images/course-page.svg" alt="自分にあったペースで学べる">
    <div class="feature-text">
      <h3>自分に合ったペースで学べる</h3>
      <p>
        スライド形式でめくって学べるので、自分のペースで学習をすすめられます。PDFをダウンロードして、スクリーンに映して一斉授業を行ったり、印刷してプリントで学習を行ったりもしていただけます。
      </p>
    </div>
  </div>
  <div class="feature-one">
    <img data-src="{{site.url}}/assets/images/articles.svg" alt="知識を広げる">
    <div class="feature-text">
      <h3>アイデアを広げる</h3>
      <p>
        作品を作るときに役立つ情報や、ビジュアルプログラミングで作られたプロジェクトの紹介、新しい技術などを記事で発信しています。自分の作りたいものややりたいことを見つけてみませんか？
      </p>
    </div>
  </div>
</section>


## メクルンのメンバー
メクルンは、ビジュアルプログラミング言語でプログラミングをはじめた5人のメンバーで運営しています。
{: .h2-sub}

<div class="owners">
  <div class="owner">
    <img data-src="{{site.url}}/assets/images/contributor/nztm.jpg" alt="のざきともひろのアイコン画像">
    <p>野崎 智弘</p>
  </div>
  <div class="owner">
    <img data-src="{{site.url}}/assets/images/contributor/yuki384.jpg" alt="みはしゆうきのアイコン画像">
    <p>三橋 優希</p>
  </div>
</div>
{% if site.data.writor.size > 0 %}
<ul class="writor-list">
  {% for writor in site.data.writor %}
  <li class="writor"><img data-src="{{site.url}}/assets/images/contributor/{{writor.img}}" alt="{{writor.name}}のアイコン画像"><p class="writor-name">{{writor.name}}</p></li>
  {% endfor %}
</ul>
{% endif %}

<style media="screen">
  section {
    padding: 48px 0;
  }
</style>
