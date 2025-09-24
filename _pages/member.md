---
title: "Lab Members"
layout: fullwidth
permalink: /member/
classes:
  - wide
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

<link rel="stylesheet" href="/assets/css/homepage.css">


<div class="jp-section">
  <div class="container">
    <div class="jp-hero-content">
      <h1 style="font-style: italic; font-weight: normal;">Lab Members</h1>
    </div>
  </div>
</div>

<div class="jp-section">
  <div class="container">
    <div class="jp-section-header">
      <h2 style="font-style: italic;">Current Students</h2>
    </div>

    <!-- Master's Students -->
    {% if site.data.members.current_students.masters %}
    <div class="jp-subsection-header">
      <h3>Master's Students</h3>
    </div>

    <div class="jp-grid-4">
      {% for student in site.data.members.current_students.masters %}
      <div class="jp-card" data-aos="fade-up">
        <div class="jp-card-header">
          <h4>{{ student.name }}</h4>
          {% if student.program %}
          <span class="jp-tag">{{ student.program }}</span>
          {% endif %}
          {% if student.other %}
          <span class="jp-tag jp-tag-other">{{ student.other }}</span>
          {% endif %}
        </div>

        <div class="jp-card-content">
          {% if student.research_areas %}
          <div class="jp-tag-container">
            {% for area in student.research_areas %}
            <span class="jp-tag jp-tag-secondary">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="jp-card-footer">
          <div class="jp-link-group">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="jp-icon-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="jp-icon-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="jp-icon-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    {% endif %}

    <!-- Undergraduate Students -->
    {% if site.data.members.current_students.undergraduates %}
    <div class="jp-subsection-header">
      <h3 >Undergraduate Students</h3>
    </div>

    <div class="jp-grid-4">
      {% for student in site.data.members.current_students.undergraduates %}
      <div class="jp-card" data-aos="fade-up">
        <div class="jp-card-header">
          <h4>{{ student.name }}</h4>
          {% if student.program %}
          <span class="jp-tag">{{ student.program }}</span>
          {% endif %}
          {% if student.other %}
          <span class="jp-tag jp-tag-other">{{ student.other }}</span>
          {% endif %}
        </div>

        <div class="jp-card-content">
          {% if student.research_areas %}
          <div class="jp-tag-container">
            {% for area in student.research_areas %}
            <span class="jp-tag jp-tag-secondary">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="jp-card-footer">
          <div class="jp-link-group">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="jp-icon-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="jp-icon-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="jp-icon-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    {% endif %}

    <!-- Undergraduate Intern Students -->
    {% if site.data.members.current_students.interns %}
    <div class="jp-subsection-header">
      <h3>Undergraduate Intern Students</h3>
    </div>

    <div class="jp-grid-6">
      {% for student in site.data.members.current_students.interns %}
      <div class="jp-card jp-card-compact" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 100 }}">
        <div class="jp-card-header">
          <h4>{{ student.name }}</h4>
          <span class="jp-tag jp-tag-small">{{ student.program }}</span>
          {% if student.duration %}
          <span class="jp-tag jp-tag-small jp-tag-secondary">{{ student.duration }}</span>
          {% endif %}
        </div>

        <div class="jp-card-content">
          {% if student.research_areas %}
          <div class="jp-tag-container">
            {% for area in student.research_areas %}
            <span class="jp-tag jp-tag-small jp-tag-secondary">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="jp-card-footer">
          <div class="jp-link-group">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="jp-icon-link jp-icon-link-small" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="jp-icon-link jp-icon-link-small" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="jp-icon-link jp-icon-link-small" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    {% endif %}

    <!-- Exchange Students -->
    {% if site.data.members.current_students.exchange %}
    <div class="jp-subsection-header">
      <h3>Exchange Students</h3>
    </div>

    <div class="jp-grid-3">
      {% for student in site.data.members.current_students.exchange %}
      <div class="jp-card" data-aos="fade-up">
        <div class="jp-card-header">
          <h4>{{ student.name }}</h4>
          <span class="jp-tag">{{ student.program }}</span>
          {% if student.home_university %}
          <span class="jp-tag jp-tag-secondary">{{ student.home_university }}</span>
          {% endif %}
          {% if student.duration %}
          <span class="jp-tag jp-tag-secondary">{{ student.duration }}</span>
          {% endif %}
        </div>

        <div class="jp-card-content">
          {% if student.research_areas %}
          <div class="jp-tag-container">
            {% for area in student.research_areas %}
            <span class="jp-tag jp-tag-secondary">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="jp-card-footer">
          <div class="jp-link-group">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="jp-icon-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="jp-icon-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="jp-icon-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>

<div class="jp-section">
  <div class="container">
    <div class="jp-section-header">
      <h2 style="font-style: italic;">Graduated Master & Thesis</h2>
    </div>

    <div class="jp-grid-1">
      {% for year_data in site.data.members.graduated_students %}
      <div class="jp-card jp-card-thesis" data-aos="fade-up">
        <div class="jp-card-header">
          <h3>{{ year_data.year }}</h3>
        </div>

        <div class="jp-card-content">
          {% for student in year_data.students %}
          <div class="jp-thesis-item">
            <h4 class="jp-thesis-title-cn">{{ student.thesis_cn }}</h4>
            <p class="jp-thesis-title-en">{{ student.thesis_en }}</p>
            <p class="jp-thesis-author">{{ student.name }} ({{ student.name_en }})</p>
          </div>
          {% unless forloop.last %}
          <hr class="jp-divider">
          {% endunless %}
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 300,
    once: true,
    offset: 50
  });
</script>

<style>
/* Full width layout overrides */
.jp-section {
  width: 100%;
  padding: var(--jp-spacing-lg) 3rem;
  margin: 0;
}

.container {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.jp-subsection-header {
  margin: var(--jp-spacing-lg) 0 var(--jp-spacing-md);
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid var(--jp-accent);
}

.jp-subsection-header h3 {
  font-size: 1.3rem;
  color: var(--jp-accent);
  font-weight: 600;
  margin: 0;
}

.jp-tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--jp-spacing-xs);
  margin-top: var(--jp-spacing-sm);
}

.jp-link-group {
  display: flex;
  gap: var(--jp-spacing-xs);
  align-items: center;
}

.jp-icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  color: var(--jp-gray-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.jp-icon-link:hover {
  background: var(--jp-accent);
  color: var(--jp-white);
  transform: translateY(-2px);
}

.jp-icon-link-small {
  width: 28px;
  height: 28px;
  font-size: 0.85rem;
}

/* Smaller, more compact cards */
.jp-card {
  padding: var(--jp-spacing-md);
  min-height: 140px;
}

.jp-card-header h4 {
  font-size: 1rem;
  margin-bottom: var(--jp-spacing-xs);
  line-height: 1.3;
}

.jp-card-compact {
  padding: var(--jp-spacing-sm);
  min-height: 120px;
}

.jp-card-compact .jp-card-header h4 {
  font-size: 0.95rem;
  margin-bottom: var(--jp-spacing-xs);
}

/* Grid layouts for different densities */
.jp-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--jp-spacing-md);
  margin-bottom: var(--jp-spacing-xl);
}

.jp-grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--jp-spacing-sm);
  margin-bottom: var(--jp-spacing-xl);
}

.jp-grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--jp-spacing-sm);
  margin-bottom: var(--jp-spacing-xl);
}

/* Responsive grid adjustments */
@media (max-width: 1400px) {
  .jp-grid-6 { grid-template-columns: repeat(5, 1fr); }
}

@media (max-width: 1200px) {
  .jp-grid-5 { grid-template-columns: repeat(4, 1fr); }
  .jp-grid-6 { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 1024px) {
  .jp-grid-4 { grid-template-columns: repeat(3, 1fr); }
  .jp-grid-5 { grid-template-columns: repeat(3, 1fr); }
  .jp-grid-6 { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .jp-grid-4,
  .jp-grid-5,
  .jp-grid-6 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .jp-grid-4,
  .jp-grid-5,
  .jp-grid-6 {
    grid-template-columns: 1fr;
  }
}

.jp-thesis-item {
  margin: var(--jp-spacing-lg) 0;
}

.jp-thesis-title-cn {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--jp-black);
  margin: 0 0 var(--jp-spacing-xs);
  line-height: 1.4;
}

.jp-thesis-title-en {
  font-size: 1rem;
  font-weight: 500;
  color: var(--jp-accent);
  margin: 0 0 var(--jp-spacing-xs);
  line-height: 1.4;
  font-style: italic;
}

.jp-thesis-author {
  font-size: 0.9rem;
  color: var(--jp-gray-dark);
  margin: 0;
  font-weight: 500;
}

.jp-divider {
  border: none;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: var(--jp-spacing-md) 0;
}

/* Other field tag styling */
.jp-tag-other {
  background: #b4eeb4 !important;
  color: var(--jp-black) !important;
}


/* Ensure consistent card heights */
.jp-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.jp-card-content {
  flex: 1;
}

.jp-card-footer {
  margin-top: auto;
  padding-top: var(--jp-spacing-md);
}

/* Thesis section - row by row layout with more width */
.jp-grid-1 {
  display: flex;
  flex-direction: column;
  gap: var(--jp-spacing-lg);
  margin-bottom: var(--jp-spacing-xl);
  width: 100%;
  max-width: none;
}

.jp-card-thesis {
  padding: var(--jp-spacing-xl);
  min-height: auto;
  width: 100%;
  max-width: none;
}

.jp-card-thesis .jp-card-header h3 {
  font-size: 1.8rem;
  color: var(--jp-primary);
  margin: 0;
  text-align: center;
  padding-bottom: var(--jp-spacing-md);
  border-bottom: 2px solid var(--jp-accent);
  margin-bottom: var(--jp-spacing-md);
}
