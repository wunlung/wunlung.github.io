---
layout: default
title: Home
---
<section class="intro">
  <p class="eyebrow">AI · Human · Systems</p>
  <h1>Building AI systems<br>that work for people.</h1>
  <p>I’m Wun Lung Wong, an AI engineering leader in Sydney. I turn difficult ideas into dependable products, lead focused technical teams, and write about production AI and model thinking.</p>
  <div class="actions">
    <a class="button" href="{{ '/projects/' | relative_url }}">Explore my work</a>
    <a class="button button-secondary" href="{{ '/writing/' | relative_url }}">Read my writing</a>
  </div>
</section>

<section class="section" aria-labelledby="approach-heading">
  <p class="eyebrow" id="approach-heading">How I work</p>
  <div class="principles">
    <article><h3>Start with people</h3><p>Understand the real problem and the outcome before choosing a model.</p></article>
    <article><h3>Design the system</h3><p>Balance quality, cost, latency, risk, feedback, and adoption—not accuracy alone.</p></article>
    <article><h3>Deliver together</h3><p>Create clarity and ownership so strong teams can experiment safely and ship reliably.</p></article>
  </div>
</section>

<section class="section" aria-labelledby="writing-heading">
  <p class="eyebrow" id="writing-heading">Recent writing</p>
  {% if site.posts.size > 0 %}
    <ol class="post-list">
      {% for post in site.posts limit: 4 %}
        <li>
          <time class="post-meta" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
        </li>
      {% endfor %}
    </ol>
  {% else %}
    <p>The first article is taking shape.</p>
  {% endif %}
</section>

<section class="section">
  <p class="motif">Human ↔ Model ↔ System</p>
</section>
