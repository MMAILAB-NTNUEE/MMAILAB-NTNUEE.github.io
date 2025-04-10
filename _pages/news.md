---
title: "News & Research Updates"
layout: single
permalink: /news/
classes:
  - wide
header:
  overlay_image: /assets/images/news-header.jpg
  overlay_filter: 0.5
---

<div class="feature-section">
  <div class="feature-container">
    <div class="section-heading">
      <h2>Latest News & Updates</h2>
    </div>
    
    <div class="news-filter-bar">
      <div class="news-filter-heading">Filter By:</div>
      <div class="news-filter-tags">
        <a href="/news/" class="news-filter-tag active">All</a>
        <a href="/news/?tag=research" class="news-filter-tag">Research</a>
        <a href="/news/?tag=awards" class="news-filter-tag">Awards</a>
        <a href="/news/?tag=publications" class="news-filter-tag">Publications</a>
        <a href="/news/?tag=events" class="news-filter-tag">Events</a>
        <a href="/news/?tag=press" class="news-filter-tag">Press</a>
      </div>
    </div>
    
    <div class="news-grid">
      {% assign all_posts = site.posts %}
      {% for post in all_posts %}
        <div class="news-card">
          <div class="news-card-image">
            {% if post.header.teaser %}
              <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
            {% else %}
              <img src="/assets/images/news-default.jpg" alt="{{ post.title }}">
            {% endif %}
          </div>
          <div class="news-card-content">
            <div class="news-card-meta">
              <span class="news-date">{{ post.date | date: "%B %d, %Y" }}</span>
              {% if post.categories.size > 0 %}
                <span class="news-category">{{ post.categories | first }}</span>
              {% endif %}
            </div>
            <h3 class="news-card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="news-card-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
            <div class="news-card-tags">
              {% for tag in post.tags %}
                <a href="/news/?tag={{ tag | slugify }}" class="news-tag">#{{ tag }}</a>
              {% endfor %}
            </div>
            <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
          </div>
        </div>
      {% endfor %}
    </div>
    
    <div class="pagination">
      {% if paginator.total_pages > 1 %}
      <div class="pagination-links">
        {% if paginator.previous_page %}
          <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-link">← Previous</a>
        {% endif %}
        
        {% if paginator.next_page %}
          <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-link">Next →</a>
        {% endif %}
      </div>
      {% endif %}
    </div>
  </div>
</div>

<div class="feature-section grid-pattern">
  <div class="feature-container">
    <div class="section-heading">
      <h2>Research Themes</h2>
    </div>
    
    <div class="research-themes-grid">
      <div class="research-theme-card">
        <div class="research-theme-icon">
          <i class="fas fa-eye"></i>
        </div>
        <h3>Computer Vision</h3>
        <p>Advancing algorithms for image understanding, object detection, and scene analysis</p>
        <div class="theme-tags">
          <span class="theme-tag">#computer-vision</span>
          <span class="theme-tag">#deep-learning</span>
        </div>
        <a href="/research/#computer-vision" class="theme-link">View Projects →</a>
      </div>
      
      <div class="research-theme-card">
        <div class="research-theme-icon">
          <i class="fas fa-brain"></i>
        </div>
        <h3>Machine Learning</h3>
        <p>Creating intelligent systems through deep learning, reinforcement learning, and neural networks</p>
        <div class="theme-tags">
          <span class="theme-tag">#machine-learning</span>
          <span class="theme-tag">#neural-networks</span>
        </div>
        <a href="/research/#machine-learning" class="theme-link">View Projects →</a>
      </div>
      
      <div class="research-theme-card">
        <div class="research-theme-icon">
          <i class="fas fa-video"></i>
        </div>
        <h3>Multimedia Analysis</h3>
        <p>Integrating multiple modalities including visual, audio, and textual data for richer understanding</p>
        <div class="theme-tags">
          <span class="theme-tag">#multimedia</span>
          <span class="theme-tag">#multimodal</span>
        </div>
        <a href="/research/#multimedia-analysis" class="theme-link">View Projects →</a>
      </div>
    </div>
  </div>
</div>

<div class="feature-section">
  <div class="feature-container">
    <div class="section-heading">
      <h2>Featured Projects</h2>
    </div>
    
    <div class="featured-projects-grid">
      <div class="featured-project">
        <img src="/assets/images/project1.jpg" alt="Self-supervised Learning">
        <div class="featured-project-overlay">
          <h3>Self-supervised Visual Representation Learning</h3>
          <div class="project-tags">
            <span class="project-tag">#computer-vision</span>
            <span class="project-tag">#deep-learning</span>
          </div>
          <p>Developing new approaches for learning visual representations without human-annotated labels.</p>
          <a href="/research/self-supervised-learning/" class="project-link">Learn More →</a>
        </div>
      </div>
      
      <div class="featured-project">
        <img src="/assets/images/project2.jpg" alt="Medical Imaging">
        <div class="featured-project-overlay">
          <h3>Vision-Language Models for Medical Imaging</h3>
          <div class="project-tags">
            <span class="project-tag">#medical-imaging</span>
            <span class="project-tag">#multimodal</span>
          </div>
          <p>Creating AI systems that can understand both visual medical data and textual medical reports.</p>
          <a href="/research/medical-vision-language/" class="project-link">Learn More →</a>
        </div>
      </div>
      
      <div class="featured-project">
        <img src="/assets/images/project3.jpg" alt="Edge Computing">
        <div class="featured-project-overlay">
          <h3>Efficient Neural Networks for Edge Devices</h3>
          <div class="project-tags">
            <span class="project-tag">#edge-computing</span>
            <span class="project-tag">#neural-networks</span>
          </div>
          <p>Designing lightweight, energy-efficient neural networks for resource-constrained devices.</p>
          <a href="/research/efficient-neural-networks/" class="project-link">Learn More →</a>
        </div>
      </div>
    </div>
  </div>
</div>