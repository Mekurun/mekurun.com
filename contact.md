---
layout: page
title: contact.title
permalink: /contact/
description: contact.description
---

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>{% t contact.name %}<i class="required">*</i><input type="text" name="name" required /></label>   
  </p>
  <p>
    <label>{% t contact.email %}<i class="required">*</i><input type="email" name="email" required /></label>
  </p>
  <p>
    <label>{% t contact.mailTitle %}<i class="required">*</i><input type="text" name="subject" required /></label>   
  </p>
  <p>
    <label>{% t contact.mailContent %}<i class="required">*</i><textarea name="message" required></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">{% t contact.send %}</button>
  </p>
</form>
