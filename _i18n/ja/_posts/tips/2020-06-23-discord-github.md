---
layout: post
title: "DiscordのチャンネルにGitHubの通知を送る方法"
date: 2020-06-23 12:00:00 +0900
category: tips
# thumbnail: /release.png
author: nztm
description: "この記事では、DiscordのWebhookを使ってGitHubリポジトリのコミットやプルリクエストの通知をDiscordチャンネルに自動で送信する方法をご紹介します。"
---

この記事では「DiscordのチャンネルにGitHubのリポジトリの変更を通知する方法」をご紹介します。

Discordは、最近はゲーマー向けのチャットアプリとしてではなく、仕事やオンラインコミュニティなどの用途にも多く使われるようになりました。当サイト、メクルンもメンバーとの普段の連絡はDiscordを使って行っています。

メクルンのDiscordサーバーの設定を行っていた時に、あるメンバーからGitHubのリポジトリの変更通知をDiscordのチャンネルに送るようにしてほしいと要望があったので、今回はその設定方法を詳しく解説したいと思います。

Slackであれば、GitHubのアプリをインストールして連携するだけで、コミットやプルリクエストなどの変更の通知を自動投稿できるのですが、Discordは自分でWebhookを設定する必要があり、少し面倒でした。

では、早速手順を紹介したいと思います。

## DiscordでWebhookを作成しよう
まず投稿するチャンネルを決めたら、そのチャンネルにマウスのカーソルを当てて、歯車(チャンネルの編集)をクリックしてください。

![Discord チャンネルの編集](/assets/article/tips/discord-github/0001.png)

すると、このようにチャンネルの設定画面が表示されますので、左側のメニューからウェブフックを選んでください。

この画面になったら、画像の赤線で囲われている「ウェブフックを作成」をクリックしてください。

![Discord ウェブフックを作成](/assets/article/tips/discord-github/0002.png)

ボタンを押すとこのように「ウェブフックを編集」というモーダル画面が開きます。

お名前は勝手にGitHubになるので適当でもいいですが、ここではGitHubにしておきます。

アイコンを設定してもGitHubのアイコンに上書きされるので設定する必要はありません。

ウェブフックURLという部分に長いURLがありますので、これを全部コピーしましょう。

![Discord ウェブフックを編集](/assets/article/tips/discord-github/0003.png)


## GitHubでWebhookの設定をしよう
次はGitHubで先程取得&コピーしたウェブフックURLをGitHubのリポジトリに登録します。

通知をしたいリポジトリを開いて、Settings の 左側のメニューからWebhooksを選択してください。

![GitHub Webhooks](/assets/article/tips/discord-github/0004.png)

開いたら「Add webhook」というボタンがあるので、そこをクリックしてください。

![GitHub Add webhook](/assets/article/tips/discord-github/0005.png)

すると、Webhookの設定画面が開きますので、ここに情報を入力していきます。

① Payload URLに先程、Discordで取得したウェブフックURLの後ろに/githubを付け加えたものを入力してください

例: https://discordapp.com/api/webhooks/****************/github

② Content type を application/json に設定してください

③ Which events would you like to trigger this webhook? を任意のものに設定してください

Push された時のみ通知する場合は Just the push event. を、全部の通知を送信する場合はSend me everything. を、通知するものをひとつひとつ任意で設定したい場合は Let me select individual events. を選択してください。

![GitHub Add webhook](/assets/article/tips/discord-github/0006.png)

最後に「Add webhook」のボタンを押したら設定は完了です。

## コミットして確認しよう
最後にコミット&Pushを行ってDiscordへこのような通知がきたら成功です。

![Discord webhook message](/assets/article/tips/discord-github/0007.png)

今回の記事は以上になります、最後までお読み頂きありがとうございました。

