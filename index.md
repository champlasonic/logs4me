---
layout: default
title: home
---

<div class="post-list">
{% for post in site.posts %}
  <article class="post-item">
    <div class="post-item-header">
      <h2 class="post-item-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% if post.model %}{% assign model_url = site.model_permalinks[post.model] | default: post.model | slugify %} <span class="post-item-model">by <a href="{{ site.baseurl }}/model/{{ model_url }}/">{{ post.model }}</a></span>{% endif %}
      </h2>
      <div class="post-item-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%Y年%m月%d日" }}
        </time>
      </div>
    </div>
  </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<p>No posts yet.</p>
{% endif %}

<div class="footer-tags">
  <div class="footer-tag-section">
    <strong>Models:</strong>
    {% assign models = site.posts | map: "model" | compact | uniq | sort %}
    {% for model in models %}
      {% assign model_url = site.model_permalinks[model] | default: model | slugify %}
      <a href="{{ site.baseurl }}/model/{{ model_url }}/" class="footer-tag-link">{{ model }}</a>{% unless forloop.last %},{% endunless %}
    {% endfor %}
  </div>

  <div class="footer-tag-section">
    <strong>Published:</strong>
    {% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
    {% for year_month in postsByYearMonth %}
      {% assign date_parts = year_month.name | split: "-" %}
      {% assign year = date_parts[0] %}
      {% assign month = date_parts[1] %}
      <a href="{{ site.baseurl }}/archive/{{ year }}/{{ month }}/" class="footer-tag-link">{{ year }}-{{ month }}</a>{% unless forloop.last %},{% endunless %}
    {% endfor %}
  </div>
</div>
