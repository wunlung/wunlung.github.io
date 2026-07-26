---
layout: default
title: Lab
description: Small interactive tools for reasoning about AI systems and product decisions.
permalink: /lab/
---
<p class="eyebrow">Lab</p>
# Ideas you can explore.

Small browser-based experiments that turn mental models into something tangible. They are prompts for thinking and discussion—not validated production advice.

{% assign featured_labs = site.labs | where: 'featured', true | sort: 'order' %}
{% assign other_labs = site.labs | where_exp: 'lab', 'lab.featured != true' | sort: 'order' %}

{% if featured_labs.size > 0 %}
<section class="section lab-section">
  <p class="eyebrow">Featured experiments</p>
  <div class="project-grid">
    {% for lab in featured_labs %}
    <article class="project-card">
      <p class="project-card-meta">{{ lab.status }}{% if lab.year %} · {{ lab.year }}{% endif %}</p>
      <h2><a href="{{ lab.url | relative_url }}">{{ lab.title }}</a></h2>
      <p>{{ lab.description }}</p>
      {% if lab.question %}<p class="lab-card-question">{{ lab.question }}</p>{% endif %}
      <a class="project-link" href="{{ lab.url | relative_url }}">Open experiment →</a>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

{% if other_labs.size > 0 %}
<section class="section lab-section">
  <p class="eyebrow">More experiments</p>
  <div class="project-grid">
    {% for lab in other_labs %}
    <article class="project-card">
      <p class="project-card-meta">{{ lab.status }}{% if lab.year %} · {{ lab.year }}{% endif %}</p>
      <h2><a href="{{ lab.url | relative_url }}">{{ lab.title }}</a></h2>
      <p>{{ lab.description }}</p>
      <a class="project-link" href="{{ lab.url | relative_url }}">Open experiment →</a>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

<section class="section">
  <p class="eyebrow">How to read the Lab</p>
  <p><strong>Stable</strong> experiments are polished enough to use repeatedly. <strong>Experiment</strong> means the idea works but is still evolving. <strong>Work in progress</strong> signals an incomplete exploration. Archived tools remain available for reference.</p>
</section>
