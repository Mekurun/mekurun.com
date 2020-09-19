<section class="three-blocks">
  <div class="three-blocks-item">
    <img data-src="/assets/images/webandpdf.svg" alt="選んでつくれる">
    <h3>選んでつくれる</h3>
    <p>いろんなジャンルのコースから、好きなものを選んでつくれます。作品を拡張するコースで自由に要素を組み込んでみましょう。
  </p>
  </div>
  <div class="three-blocks-item">
    <img data-src="/assets/images/people.svg" alt="自分にあったペースで学べる">
    <h3>自分に合ったペースで学べる</h3>
    <p>スライド形式でめくって学べるので、自分のペースで学習をすすめられます。PDFを印刷してプリントで学ぶこともできます。</p>
  </div>
  <div class="three-blocks-item">
    <img data-src="/assets/images/article.svg" alt="知識を広げる">
    <h3>知識を広げる</h3>
    <p>作品を作るときに役立つ情報や、ビジュアルプログラミングで作られたプロジェクトの紹介などを記事で発信しています。</p>
  </div>
</section>

## 制作・運営
メクルンは、2名の運営チームと、3名のコンテンツ制作チームの中高生5名で運営しています。
{: .h2-sub}

<div class="owners">
  <div class="owner">
    <img data-src="/assets/images/supporter/noimg.png" alt="のざきともひろのアイコン画像">
    <h3>野崎 智弘</h3>
    <p>
      CoderDojoやその他団体で、子どもたちのプログラミング教育に携わっています。サービスデザインや企画を行い、プロジェクトリーダーとして複数のサービスを開発してきました。
    </p>
  </div>
  <div class="owner">
    <img data-src="/assets/images/supporter/noimg.png" alt="みはしゆうきのアイコン画像">
    <h3>三橋 優希</h3>
    <p>
      普段はWebデザイナー・プログラミング教室講師として活動しています。小学生向けのプログラミング書籍を執筆・出版しました。
    </p>
  </div>
</div>

### コンテンツ制作チーム
<ul class="writor-list">
  {% for writor in site.data.writor %}
  <li class="writor"><img data-src="/assets/images/supporter/noimg.png" alt="{{writor.name}}のアイコン画像"><p class="writor-name">{{writor.name}}</p></li>
  {% endfor %}
</ul>
