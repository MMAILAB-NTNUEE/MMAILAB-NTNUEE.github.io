---
title: "News & Updates"
layout: splash
permalink: /news/
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

<link rel="stylesheet" href="/assets/css/homepage.css">

<div class="jp-section">
  <div class="container">
    <div class="jp-hero-content">
      <h1>News & Updates</h1>
      <p class="jp-subtitle">Stay updated with our latest research developments, publications, and lab activities.</p>
    </div>
  </div>
</div>

{% assign news_by_year = site.news | group_by_exp: "item", "item.date | date: '%Y'" | sort: "name" | reverse %}

{% for year in news_by_year %}
<div class="jp-section">
  <div class="container">
    <div class="jp-section-header">
      <h2>{{ year.name }}</h2>
    </div>

    <div class="jp-grid-1">
      {% assign sorted_items = year.items | sort: "date" | reverse %}
      {% for news_item in sorted_items %}
      <div class="jp-card" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 100 }}">
        <div class="jp-card-header">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              {% if news_item.categories.size > 0 %}
              <span class="jp-tag">{{ news_item.categories | first }}</span>
              {% endif %}
              <h3 style="margin: 0.5rem 0;">
                <a href="{{ news_item.url | relative_url }}">{{ news_item.title }}</a>
              </h3>
            </div>
            <div class="jp-date-badge">
              <span class="day">{{ news_item.date | date: "%d" }}</span>
              <span class="month">{{ news_item.date | date: "%b" }}</span>
              <span class="year">{{ news_item.date | date: "%Y" }}</span>
            </div>
          </div>
        </div>

        <div class="jp-card-content">
          <div class="jp-card-body">
            <p>{{ news_item.excerpt | strip_html | truncate: 150 }}</p>

            {% if news_item.tags.size > 0 %}
            <div style="margin-top: 1rem;">
              {% for tag in news_item.tags %}
              <span class="jp-tag jp-tag-secondary">#{{ tag }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>

          {% if news_item.header.teaser %}
          <div class="jp-card-image">
            <img src="{{ news_item.header.teaser | relative_url }}" alt="{{ news_item.title }}" loading="lazy">
          </div>
          {% endif %}
        </div>

        <div class="jp-card-footer">
          <a href="{{ news_item.url | relative_url }}" class="jp-button">
            Read Full Story
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
{% endfor %}

<div class="jp-section">
  <div class="container">
    <div class="jp-section-header">
      <h2>News Statistics</h2>
    </div>

    <div class="jp-grid-3">
      <div class="jp-card jp-stat-card" data-aos="fade-up">
        <div class="jp-card-content">
          <div class="jp-stat-icon"><i class="fas fa-newspaper"></i></div>
          <div class="jp-stat-counter">{{ site.news | size }}</div>
          <div class="jp-stat-title">Total News Items</div>
        </div>
      </div>

      {% assign categories = site.news | map: "categories" | compact | flatten | group_by_exp: "item", "item" | sort: "size" | reverse %}

      {% for category in categories limit:2 %}
      <div class="jp-card jp-stat-card" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 100 }}">
        <div class="jp-card-content">
          <div class="jp-stat-icon"><i class="fas fa-tag"></i></div>
          <div class="jp-stat-counter">{{ category.size }}</div>
          <div class="jp-stat-title">{{ category.name | capitalize }}</div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
</script>