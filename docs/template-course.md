## 各コースの書き方

コースの内容自体についてのガイドラインは別途Googleドライブで共有されているかと思いますので、そちらを参照ください。

1. `_courses/ja`下にmdファイルを作成します。(できる限り後述の`course-name`と同じ名前にしてください🙏)
2. 以下のルールに従って、mdファイル内にコースの情報を記述してください。
3. スライドの画像は指定されている場所においてください。
4. スライドのpdfファイルを `/assets/course/{{category}}/{{parent(あれば)}}/{{course-name}}/` に `/slide.pdf`という名前で置いてください。
5. コースの追加は完了です！

### コースの情報の書き方

yamlの書き方で以下の値を設定してください。設定が必要ない項目がある場合、項目自体書かなくて問題ありません。

| frontmatter | ルール |
| --- | --- |
| `layout: ` | `course` に設定 |
| `date: `   | 追加日を`yyyy-MM-dd` のかたちで設定 |
| `title: ` | コースのタイトルを設定 |
| `title-kana:`  | ひらがなモードでのコースタイトルを設定  |
| `category: ` | カテゴリー。scratch か minecraft に設定 |
| `difficulty: ` | 難易度。introduction, easy, normal, hard の4つがある |
| `parent: ` | 親コースのcourse-name。このコースがサブコースである場合のみ設定。 |
|`course-name: `| コースの判別やurlの設定に使われる名前。半角英数字 |
| `description: ` |  コースの説明 |
|`thumbnail: `   |  サムネイル。`/assets/course/{{category}}/{{parent(あれば)}}/{{course-name}}/` に置くこと。下記テンプレート例で言うと、`/assets/course/scratch/shooting-game/score/` になります。  |
|`slides: `  | スライド。`/assets/course/{{category}}/{{parent(あれば)}}/{{course-name}}/` に置く。youtubeの動画を差し込む場合は, youtubeのシェア用URL(例: `https://youtu.be/t8kpeE_sNB0`)を設定。|

以下記述例です。上下のハイフン3つを忘れないように気をつけてください。

```yaml
---
layout: course
title:  "シューティングゲームを作ろう！"
title-kana: "シューティングゲームをつくろう！"
category: scratch
difficulty: hard
parent: shooting-game
course-name: score
description: "Scratchでシューティングゲームに得点を作るやり方を紹介します。キャラクターの動かし方や弾の出し方を覚えて、オリジナルシューティングゲームを作ろう！"
thumbnail: /img.001.jpeg
slides:
-  /img.001.jpeg
-  /img.001.jpeg
-  /img.002.jpeg
-  https://youtu.be/t8kpeE_sNB0
-  /img.003.jpeg
-  /img.004.jpeg
---
```
