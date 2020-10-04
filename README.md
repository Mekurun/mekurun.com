# メクルン Mekurun

メクルン (Mekurun) はスライドで学べるビジュアルプログラミング学習サイトです。  
ScratchやMakeCodeといったブロックでプログラミングができるビジュアルプログラミング言語を中心に子ども向けのプログラミング入門コンテンツを提供しています。

![OGP](/assets/images/ogp/main.png)

## ドキュメント

[▶ 記事の追加方法](/docs/template-article.md)  
[▶ コースの追加方法](/docs/template-course.md)

### その他更新方法
#### 支援者情報
[`_data/supporter.yml`](_data/supporter.yml) を編集する。掲載するお名前は`name:`, 画像は`img:`です。画像は/assets/images/supporter/に配置してあります。

#### メンバー情報
- 名前の変更: [`_data/writor.yml`](_data/writor.yml) の該当する`name:` を編集する
- 画像の変更: [`/assets/images/contributor/`](/assets/images/contributor/) 内の該当するファイルを置き換える

## 環境
### 動かし方(環境構築)
```bash
# 依存関係をインストールする
$ bundle install
$ yarn # or npm install
# 開発環境を立ち上げる（Webpack と Jekyll を同時に立ち上げます）
$ yarn dev
```
