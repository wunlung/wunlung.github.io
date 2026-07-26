---
layout: default
title: Writing
description: Notes on production AI, technical systems, leadership, and model thinking.
permalink: /writing/
---
<p class="eyebrow">Writing</p>
# Thinking through the system.

I write about production AI, technical leadership, and the trade-offs behind dependable products.

{% if site.posts.size > 0 %}
<ol class="post-list">
  {% for post in site.posts %}
  <li>
    <time class="post-meta" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    {% if post.tags %}<div class="tags">{% for tag in post.tags %}<span>{{ tag }}</span>{% endfor %}</div>{% endif %}
  </li>
  {% endfor %}
</ol>
{% else %}
<p>The first article is taking shape. Topics I’m exploring include production AI, evaluation, feedback loops, and model thinking.</p>
{% endif %}
