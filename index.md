---
layout: default
title: home
---

<div class="post-list">
{% for post in site.posts %}
  <article class="post-item">
    <div class="post-item-header">
      <h2 class="post-item-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <div class="post-item-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%B %d, %Y" }}
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
    <strong>Categories:</strong>
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
      {% case category[0] %}
        {% when '短編日記' %}
          {% assign category_url = 'short_essay' %}
        {% when '腕時計' %}
          {% assign category_url = 'watch' %}
        {% else %}
          {% assign category_url = category[0] %}
      {% endcase %}
      <a href="{{ site.baseurl }}/category/{{ category_url }}/" class="footer-tag-link">{{ category[0] }}</a>{% unless forloop.last %},{% endunless %}
    {% endfor %}
  </div>

  <div class="footer-tag-section">
    <strong>Models:</strong>
    {% assign models = site.posts | map: "model" | compact | uniq | sort %}
    {% for model in models %}
      {% case model %}
        {% when '菊池寛' %}
          {% assign model_url = 'kan-kikuchi' %}
        {% else %}
          {% assign model_url = model | slugify %}
      {% endcase %}
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
