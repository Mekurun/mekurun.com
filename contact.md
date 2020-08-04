---
layout: page
title: contact.title
permalink: /contact/
description: contact.description
---
<!-- class, action, methodを変更しないでください -->
<form class="formrun" action="https://form.run/api/v1/r/2rz6tr2zx0b73fmm12myjr0l" method="post">
  <!-- ↓自由に要素を追加・編集することができます -->
  <p>
    <label>{% t contact.name %}<i class="required">*</i></label>
    <input name="お名前" type="text" data-formrun-required>
  </ｐ>

  <p>
    <label>{% t contact.email %}<i class="required">*</i></label>
    <input name="メールアドレス" data-formrun-type="email_confirmation" data-formrun-required>
  </p>

  <p>
    <label>{% t contact.mailTitle %}<i class="required">*</i></label>
    <input name="件名" type="text" data-formrun-required>
  </p>

  <p>
    <label>{% t contact.mailContent %}<i class="required">*</i></label>
    <textarea name="お問い合わせ" data-formrun-required></textarea>
  </p>

  <!-- ボット投稿をブロックするためのタグ -->
  <p class="_formrun_gotcha">
    <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
    <label for="_formrun_gotcha">If you are a human, ignore this field</label>
    <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
  </p>

  <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
</form>
