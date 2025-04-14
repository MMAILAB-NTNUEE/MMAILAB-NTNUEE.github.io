---
title: "News"
layout: splash
permalink: /news/
classes:
  - wide
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

<div class="news-container">
  <div class="news-intro">
    <div class="filter-categories">
      <div class="news-filter-bar">
        <div class="news-filter-heading">Filter By:</div>
        <div class="news-filter-tags">
          <a href="/news/" class="news-filter-tag {% unless include.tag %}active{% endunless %}">All</a>
          {% assign all_tags = "" | split: "" %}
          {% for news in site.news %}
            {% for tag in news.tags %}
              {% unless all_tags contains tag %}
                {% assign all_tags = all_tags | push: tag %}
              {% endunless %}
            {% endfor %}
          {% endfor %}
          
          {% for tag in all_tags %}
            <a href="/news/?tag={{ tag | slugify }}" class="news-filter-tag {% if include.tag == tag %}active{% endif %}">{{ tag }}</a>
          {% endfor %}
        </div>
      </div>
    </div>

    <div class="news-list">
      {% assign filtered_news = site.news %}
      {% if include.tag %}
        {% assign filtered_news = site.news | where_exp: "item", "item.tags contains include.tag" %}
      {% endif %}
      
      <ul class="news-items">
        {% for news in filtered_news %}
          <li class="news-item">
            <div class="news-item-date">
              <span class="date-box">
                <span class="day">{{ news.date | date: "%d" }}</span>
                <span class="month">{{ news.date | date: "%b" }}</span>
                <span class="year">{{ news.date | date: "%Y" }}</span>
              </span>
            </div>
            
            <div class="news-item-content">
              <h3 class="news-item-title">
                <a href="{{ news.url | relative_url }}">{{ news.title }}</a>
              </h3>
              
              {% if news.categories.first %}
                <span class="news-item-category">{{ news.categories.first }}</span>
              {% endif %}
              
              <p class="news-item-excerpt">
                {{ news.excerpt | strip_html | truncate: 180 }}
              </p>
              
              {% if news.tags %}
                <div class="news-item-tags">
                  {% for tag in news.tags limit:4 %}
                    <a href="/news/?tag={{ tag | slugify }}" class="news-tag">#{{ tag }}</a>
                  {% endfor %}
                </div>
              {% endif %}
              
              <a href="{{ news.url | relative_url }}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
            
            {% if news.featured_image or news.header.teaser %}
            <div class="news-item-image">
              {% if news.featured_image %}
                <img src="{{ news.featured_image | relative_url }}" alt="{{ news.title }}">
              {% elsif news.header.teaser %}
                <img src="{{ news.header.teaser | relative_url }}" alt="{{ news.title }}">
              {% endif %}
            </div>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </div>

    {% if site.news.size > 10 %}
    <div class="pagination">
      <a href="/news/archive/" class="view-all-news">View All News <i class="fas fa-chevron-right"></i></a>
    </div>
    {% endif %}
  </div>
</div>