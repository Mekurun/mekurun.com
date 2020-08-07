---
layout: post
title: "Google Teachable MachineでAIを体験してみよう"
date: 2020-08-07 12:00:00 +0900
category: tips
thumbnail: /teachablemachine/thumbnail.png
author: nztm
description: "Google Teachable Machineを使ってAI(人工知能)の機械学習のひとつでもある画像認識をブラウザから簡単に体験してみよう。Google Teachable Machineを使えばプログラミングをする必要はなく、どなたでも簡単にAI(人工知能)を使うことができます。"
---

ここ数年のAI(人工知能)の進化はめざましく、あと10年もすれば、街中にAIを使ったサービスや仕事が溢れることになると言われています。

自動運転やロボットへの活用はもちろん、利用者が到着する時間に合わせて淹れたてのコーヒーを提供してくれる[root C](https://rootc.cafe/)や水の汚れを判別して最適なフィルターで浄化する[WOTA](https://wota.co.jp/)などのAIを駆使した新しいサービスや仕組みも生まれています。

でもAIといっても、難しいイメージがして、プログラマーや研究者じゃないと使えないと思っていませんか？

この記事では、AIってどういうことができるのかわからない、どういう仕組なのか知りたいという方に向けて、Google Teachable Machineを使ってAIを体験する方法をご紹介します。

## Google Teachable Machine とは

Google Teachable Machine とは、Googleが提供しているAI(人工知能)の機械学習ツールで、ブラウザからサイトへアクセスするだけで使用することができます。プログラミングをしなくても、画像や音声、身体の姿勢(ポーズ)などを学習させてそれらを判別するモデルを簡単に作成することができます。

Google Teachable Machineのモデル生成には、機械学習の種類のひとつ、深層学習【Deep Learning(ディープラーニング)】という技術が使われていて、複数の画像や音声から特徴点(似た部分)を抽出し学習をおこないます。

[https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)

## 画像の判別をやってみよう
今回はTeachable Machineを使って、ディープラーニングの中でも有名な画像認識を体験してみましょう。  
このようにウェブカメラに映したものを判別するモデルを作成します。

**必要になるもの**

- Google Chromeなどのブラウザ
- ウェブカメラ
- 判別に使いたい画像・もの

![Google Teachable Machineのサンプル](googleteachablemachine.gif)

### Teachable Machineを開いて準備しよう

まず、ブラウザでTeachable Machineを以下のリンクから開きましょう。  
[https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)

開けたら青色のボタン「使ってみる」をクリックしてください。

![Google Teachable Machine](0001.png)

次に、プロジェクト作成画面になるので、ここでは「画像プロジェクト」をクリックしてください。

![Google Teachable Machine](0002.png)

プロジェクトを作成したら、このような画面になります。

![Google Teachable Machine](0003.png)

次に「ウェブカメラ」を押してカメラを起動してください。  
ブラウザから許可を求められることがあるので、その場合は「許可」を押してください。

![Google Teachable Machine](0004.png)

アップロードを押すとパソコンの中にある画像を使うこともできます。  
ウェブカメラの映像が表示されたら、準備完了です。

### 学習に使う写真を撮影しよう
AIにウェブカメラに映したものを判別させるためには、「学習」という作業が必要になります。学習とは、複数のデータから共通点を見つけて、判別するためのモデルを作成する作業のことです。

AIで判別してみたいものを用意したら、学習に使用するデータ(写真)を撮影していきましょう。  
ここでは、「くまのぬいぐるみ」と「お菓子の箱」を使ってデータの撮影を行いますが、あなたの周りにあるものや何もなければ「グー」「チョキ」「パー」などでも構いません。

判別させたいものが決まったら、1つ目を手にとって、ウェブカメラに映して「長押しして録画」を押して撮影してみましょう。  
長押しすると連写できます。できるだけ判別に使用しないものが写り込まないように、白い壁や天井などを背景に撮影すると判別の精度が良くなります。

色んな角度から50枚程度撮影してみましょう。

![Google Teachable Machine](0005.png)

1つ目ができたら、次は下のClass2の「ウェブカメラ」を押して2つ目のものを撮影します。

![Google Teachable Machine](0006.png)

他にも判別したいものがある場合は下の「クラスを追加」を押して追加できます。

![Google Teachable Machine](0007.png)

### 学習させてみよう
撮影したデータの名前をわかりやすいように変えておきましょう。  
ペンマークを押して好きな名前を入力してください。

![Google Teachable Machine](0008.png)

名前を変更できたら「モデルをトレーニングする」をクリックしてモデルを生成しましょう。これがAIに特徴を覚えさせる「学習」という作業になります。

![Google Teachable Machine](0009.png)

トレーニングが終わったら、プレビューの部分のカメラが起動します。  
データの撮影に使用したものをカメラに映すとAIの認識結果が「出力」にパーセントで表示されます。  
さきほど撮影したものをウェブカメラに映してみましょう、AIがちゃんと認識していたら成功です！

![Google Teachable Machineのサンプル](googleteachablemachine.gif)

##まとめ
この記事では、Google Teachable Machineを使って画像認識を行う方法を紹介しました。  
Teachable Machineでは、他にも音声や身体のポーズなどを判別することもできますので、よければトライしてみてくださいね。

最後までお読みいただきありがとうございました。
