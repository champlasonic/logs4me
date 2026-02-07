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
      {% case model %}
        {% when '菊池寛' %}
          {% assign model_url = 'kan-kikuchi' %}
        {% when '織田作之助' %}
          {% assign model_url = 'sakunosuke-oda' %}
        {% when '太宰治' %}
          {% assign model_url = 'osamu-dazai' %}
        {% when '村上春樹' %}
          {% assign model_url = 'haruki-murakami' %}
        {% when '司馬遼太郎' %}
          {% assign model_url = 'ryotaro-shiba' %}
        {% when '中原中也' %}
          {% assign model_url = 'chuya-nakahara' %}
        {% when '泉鏡花' %}
          {% assign model_url = 'kyoka-izumi' %}
        {% when '柿本人麻呂' %}
          {% assign model_url = 'kakinomoto-no-hitomaro' %}
        {% when '安部公房' %}
          {% assign model_url = 'kobo-abe' %}
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
