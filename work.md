---
layout: default
title: Projects
description: Selected systems, prototypes, and case studies from my work in AI engineering.
permalink: /projects/
redirect_from:
  - /work/
---
<p class="eyebrow">Projects</p>
# From difficult ideas to useful systems.

Selected work across production AI, conversational intelligence, developer experience, and learning through rapid experimentation.

{% assign featured_projects = site.projects | where: 'featured', true | sort: 'order' %}
<div class="project-grid">
  {% for project in featured_projects %}
  <article class="project-card">
    <p class="project-card-meta">{% if project.year %}{{ project.year }} · {% endif %}{{ project.kind }}</p>
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    {% if project.recognition %}<p class="project-recognition">{{ project.recognition }}</p>{% endif %}
    <a class="project-link" href="{{ project.url | relative_url }}">Read case study →</a>
  </article>
  {% endfor %}
</div>

<section class="section">
  <p class="eyebrow">More work</p>
  <p>Further case studies will cover enterprise MLOps, cargo classification, email-intent classification, customer decisioning, and reinforcement-learning research. Some production work is deliberately described at the level of problem, decisions, and lessons to protect customer and employer information.</p>
</section>

<p class="motif">Human ↔ Model ↔ System</p>
