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

<div class="tag-cloud">
  <div>
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
    <a href="/category/{{ category[0] | slugify }}/" class="tag-cloud-item">
      {{ category[0] }}
      <span class="count">({{ category[1].size }})</span>
    </a>
    {% endfor %}
  </div>
</div>

<div class="archive">
  <div>
    {% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
    {% for year_month in postsByYearMonth %}
    {% assign date_parts = year_month.name | split: "-" %}
    {% assign year = date_parts[0] %}
    {% assign month = date_parts[1] %}
    <a href="/archive/{{ year }}/{{ month }}/" class="archive-item">
      {{ year }}-{{ month }}
      <span class="count">({{ year_month.items.size }})</span>
    </a>
    {% endfor %}
  </div>
</div>
