---
layout: page
title: contact.title
permalink: contact
---

<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>{% t contact.name %}: <input type="text" name="name" required /></label>   
  </p>
  <p>
    <label>{% t contact.email %}: <input type="email" name="email" required /></label>
  </p>
  <p>
    <label>{% t contact.mailTitle %}: <input type="text" name="subject" required /></label>   
  </p>
  <p>
    <label>{% t contact.mailContent %}: <textarea name="message" required></textarea></label>
  </p>
  <p>
    <button type="submit">{% t contact.send %}</button>
  </p>
</form>
