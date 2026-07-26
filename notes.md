---
layout: default
title: Notes
description: Short observations from building and operating AI systems.
permalink: /notes/
---
<p class="eyebrow">Notes</p>
# Smaller ideas, kept useful.

Short technical observations, working principles, and lessons that do not need a full essay.

{% assign sorted_notes = site.notes | sort: 'date' | reverse %}
<ol class="post-list">
  {% for note in sorted_notes %}
  <li>
    <time class="post-meta" datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: "%b %-d, %Y" }}</time>
    <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
    {% if note.description %}<p>{{ note.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ol>
