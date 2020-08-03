---
layout: page
title: termOfUse.title
permalink: /term-of-use/
description: termOfUse.description
---

{% translate_file term-of-use.md %}

<style>
  .termOfUse-list-ok, .termOfUse-list-no {
    list-style: none;
    position: relative;
  }
  .termOfUse-list-ok li::before {
    position: absolute;
    left: 0.8em;
    color: #5f9f6a;
    content: '\f00c';
    font-weight: 600;
    font-family: 'Font Awesome 5 Free';
  }
  .termOfUse-list-no li::before {
    position: absolute;
    left: 0.8em;
    color: #df5d5d;
    content: '\f00d';
    font-weight: 600;
    font-family: 'Font Awesome 5 Free';
  }
</style>
