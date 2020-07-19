---
layout: post
title: "【小学生でもできる】Google Teachable Machineを使ってAIを体験してみよう"
date: 2020-06-23 13:00:00 +0900
category: tips
# thumbnail: /release.png
author: nztm
description: "Google Teachable Machineを使ってAI(人工知能)の機械学習のひとつでもある画像認識をブラウザから簡単に体験する方法をご紹介します。Google Teachable Machineを使えばプログラミングをする必要はなく、どなたでも簡単にAI(人工知能)を扱うことができます。"
---

AI(人工知能)

あと10年もすれば、街中にAIを使ったサービスや仕事が溢れることになると思います。

この記事では、プログラミングをせずにAIを軽く触ってみたい方向けにGoogle Teachable Machineを使ってAIを体験する方法をご紹介します。

## Google Teachable Machine とは

Google Teachable Machine とは、Googleが提供しているAI(人工知能)の機械学習に使用するモデルを生成できるツールで、ブラウザからサイトへアクセスするだけで使用することができ、画像や音声、身体の姿勢(ポーズ)などを学習させてそれらを判別するモデルを簡単に作成することができます。

Google Teachable Machineのモデル生成には、機械学習の中の深層学習【Deep Learning(ディープラーニング)】という技術が使われていて、複数の画像や音声から特徴点を抽出し学習をおこないます。

## 画像の判別をやってみよう

ディープラーニングの定番、画像認識をTeachable Machineを使って体験してみましょう。

今回、Teachable Machineの画像認識を使って、このようにWebカメラで撮ったものを判別するモデルを作成します。

![Google Teachable Machine のサンプル](/assets/article/tips/technablemachine/example.gif)

**必要になるもの**

- Google Chromeなどのブラウザ
- Webカメラ
- 判別に使いたい画像・もの

### Teachable Machineを開いて準備しよう

まず、Teachable Machineを以下のリンクから開きましょう。

開けたら青色のボタン「Get Started」をクリックしてください。

[https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)

![](/assets/article/tips/technablemachine/0001.png)

次に、プロジェクト作成画面になるので、ここでは「Image Project」をクリックしてください。

Image Projectは画像認識、Audio Projectは音声認識、Pose Projectは身体のポーズを学習できます。

![](/assets/article/tips/technablemachine/0002.png)

### 判別に使う画像を追加しよう

Image Projectでプロジェクトを作成できたら、画像の学習をはじめましょう。

「Webcam」を押してWebカメラを起動してみよう。

![](/assets/article/tips/technablemachine/0003.png)

するとカメラが写りましたか？

正しく学習するために、学習させるもの

![](/assets/article/tips/technablemachine/0004.png)

学習したいものを決めて、「Hold to Record」を押して撮影して学習しましょう。

色んな角度から50枚程度撮影すると精度が良くなるよ！

![](/assets/article/tips/technablemachine/0005.png)

次にもう

![](/assets/article/tips/technablemachine/0006.png)

![](/assets/article/tips/technablemachine/0007.png)

### 学習させてみよう

ここから名前を変えれるよ

![](/assets/article/tips/technablemachine/0008.png)

名前を変更できたら「Train Model」をクリックして学習モデルを生成しよう！

![](/assets/article/tips/technablemachine/0009.png)

モデル生成が終わったら、カメラが起動したかな？

学習したものをカメラに写してみよう、判別できたかな？

![](/assets/article/tips/technablemachine/00010.png)

##まとめ

Teachable Machineで生成したモデルはTensorflowのモデルにエクスポートすることができ、プログラミングすることで他のアプリでも利用できます。

最後までお読みいただきありがとうございました。
