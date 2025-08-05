---
title: "News & Updates"
layout: splash
permalink: /news/
# show_filters: true
# active_filter: all
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

{% assign news_by_year = site.news | group_by_exp: "item", "item.date | date: '%Y'" | sort: "name" | reverse %}

{% for year in news_by_year %}
<div class="publication-year news-year" id="{{ year.name }}">
  <h2>{{ year.name }}</h2>
  
  <div class="news-items">
    {% assign sorted_items = year.items | sort: "date" | reverse %}
    {% for news_item in sorted_items %}
    <article class="news-item" data-categories="{% for category in news_item.categories %}{{ category | downcase }} {% endfor %}">
      <div class="news-item-date">
        <div class="date-box">
          <span class="day">{{ news_item.date | date: "%d" }}</span>
          <span class="month">{{ news_item.date | date: "%b" }}</span>
          <span class="year">{{ news_item.date | date: "%Y" }}</span>
        </div>
      </div>
      
      <div class="news-item-content">
        {% if news_item.categories.size > 0 %}
        <span class="news-item-category">{{ news_item.categories | first }}</span>
        {% endif %}

        <h3 class="news-item-title">
          <a href="{{ news_item.url | relative_url }}">{{ news_item.title }}</a>
        </h3>

        <div class="news-item-excerpt">
          {{ news_item.excerpt | strip_html | truncate: 150 }}
        </div>

        {% if news_item.tags.size > 0 %}
        <div class="news-item-tags">
          {% for tag in news_item.tags %}
          <span class="news-tag">#{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}

        <a href="{{ news_item.url | relative_url }}" class="read-more">
          Read Full Story
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>

      {% if news_item.header.teaser %}
      <div class="news-item-image">
        <img src="{{ news_item.header.teaser | relative_url }}" alt="{{ news_item.title }}" loading="lazy">
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>
{% endfor %}

<div class="news-stats">
  <div class="container">
    <h2>News Statistics</h2>

    <div class="stats-grid">
      <div class="stat-card" data-aos="fade-up">
        <div class="stat-icon"><i class="fas fa-newspaper"></i></div>
        <div class="stat-counter">{{ site.news | size }}</div>
        <div class="stat-title">Total News Items</div>
      </div>
      
      {% assign categories = site.news | map: "categories" | compact | flatten | group_by_exp: "item", "item" | sort: "size" | reverse %}

      {% for category in categories limit:2 %}
      <div class="stat-card" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 100 }}">
        <div class="stat-icon"><i class="fas fa-tag"></i></div>
        <div class="stat-counter">{{ category.size }}</div>
        <div class="stat-title">{{ category.name | capitalize }}</div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .news-stats {
    margin: 2rem 0;
    padding: 1rem;
  }

  .stats-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .stat-card {
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    text-align: center;
    flex: 1 1 250px;
    max-width: 300px;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #0066cc;
  }

  .stat-counter {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .stat-title {
    font-size: 1.1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    .stats-grid {
      flex-direction: column;
      align-items: center;
    }

    .stat-card {
      width: 100%;
      max-width: 100%;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Category filtering
  const filterTabs = document.querySelectorAll('.news-filter-tag');
  const newsItems = document.querySelectorAll('.news-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('href').split('/').pop().replace('/', '');

      // Filter items
      newsItems.forEach(item => {
        if (category === 'all') {
          item.style.display = '';
        } else {
          const itemCategories = item.getAttribute('data-categories');
          if (itemCategories && itemCategories.includes(category)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});
</script>