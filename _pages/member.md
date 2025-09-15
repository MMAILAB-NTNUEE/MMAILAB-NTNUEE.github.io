---
title: "Lab Members"
layout: splash
permalink: /member/
classes:
  - wide
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

<style>
  .member-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .section-heading {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-heading h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
    font-size: 2.2rem;
  }
  
  .section-heading h2:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #17A589;
  }
  
  /* Professor section styles */
  .professor-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .professor-card {
    display: flex;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1000px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .professor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .professor-photo {
    width: 300px;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .professor-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .professor-info {
    flex: 1;
    padding: 2rem;
  }
  
  .professor-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: #105E96;
    margin: 0 0 0.5rem;
  }
  
  .professor-title {
    font-size: 1.1rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .professor-bio {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #444;
  }
  
  .research-interests {
    margin-bottom: 1.5rem;
  }
  
  .research-interests h4 {
    font-size: 1.1rem;
    color: #105E96;
    margin-bottom: 0.5rem;
  }
  
  .interests-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .interest-tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    background: rgba(23, 165, 137, 0.1);
    color: #17A589;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .professor-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .contact-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background: rgba(16, 94, 150, 0.1);
    color: #105E96;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .contact-link:hover {
    background: #105E96;
    color: white;
    transform: translateY(-3px);
  }
  
  .contact-link i {
    margin-right: 0.5rem;
  }
  
  /* Enhanced Members Grid Styles */
  .members-list {
    max-width: 1200px;
    margin: 0 auto 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }
  
  .member-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
    border-radius: 16px;
    padding: 1.8rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(23, 165, 137, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    height: fit-content;
  }
  
  .member-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #105E96, #17A589, #105E96);
    background-size: 200% 100%;
    animation: gradientShift 3s ease-in-out infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .member-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    border-color: rgba(23, 165, 137, 0.3);
  }
  
  .member-card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .member-card-header {
    margin-bottom: 1.2rem;
  }
  
  .member-card-body {
    flex-grow: 1;
    margin-bottom: 1.2rem;
  }
  
  .member-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
  
  .member-name {
    font-size: 1.4rem;
    font-weight: 700;
    background: linear-gradient(135deg, #105E96, #17A589);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 0.5rem;
    line-height: 1.3;
    position: relative;
  }
  
  .member-program {
    display: block;
    font-size: 1.05rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-left: 1.2rem;
    position: relative;
  }
  
  .member-program::before {
    content: '🎓';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
  }
  
  .member-duration {
    display: block;
    font-size: 0.95rem;
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
    padding-left: 1.2rem;
    position: relative;
  }
  
  .member-duration::before {
    content: '📅';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.9rem;
  }
  
  .member-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }
  
  .member-tag {
    display: inline-block;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(16, 94, 150, 0.1), rgba(23, 165, 137, 0.08));
    color: #105E96;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid rgba(16, 94, 150, 0.15);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .member-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }
  
  .member-row:hover .member-tag::before {
    left: 100%;
  }
  
  .member-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 94, 150, 0.2);
  }
  
  .member-links {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
  
  
  .member-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(16, 94, 150, 0.1), rgba(23, 165, 137, 0.1));
    color: #105E96;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(16, 94, 150, 0.15);
    position: relative;
    overflow: hidden;
  }
  
  .member-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: linear-gradient(135deg, #105E96, #17A589);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  
  .member-link i {
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
  }
  
  .member-link:hover::before {
    width: 100%;
    height: 100%;
  }
  
  .member-link:hover {
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(16, 94, 150, 0.3);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .members-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem 1rem;
    }
    
    .member-card {
      padding: 1.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .member-container {
      padding: 1rem;
    }
    
    .members-list {
      grid-template-columns: 1fr;
      gap: 1.2rem;
      padding: 1rem;
    }
    
    .member-card {
      padding: 1.2rem;
    }
    
    .member-name {
      font-size: 1.2rem;
    }
    
    .section-heading h2 {
      font-size: 1.8rem;
    }
    
    .section-heading h3 {
      font-size: 1.4rem !important;
    }
  }
  
  .alumni-list {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .alumni-category {
    margin-bottom: 2rem;
  }
  
  .alumni-category h3 {
    color: #105E96;
    font-size: 1.5rem;
    border-bottom: 2px solid rgba(23, 165, 137, 0.3);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .alumni-item {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .alumni-info {
    flex: 1;
  }
  
  .alumni-name {
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }
  
  .alumni-graduation {
    font-size: 0.9rem;
    color: #666;
  }
  
  .alumni-current {
    color: #17A589;
    font-weight: 500;
  }
  
  /* Missing image placeholder styles */
  .student-photo.no-image {
    background: linear-gradient(135deg, #105E96, #17A589);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .professor-photo.no-image {
    background: linear-gradient(135deg, #105E96, #17A589);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 4rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Undergraduate students - slightly smaller cards */
  .undergraduate-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.2rem;
    margin-bottom: 3rem;
  }
  
  .undergraduate-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .undergraduate-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  .undergraduate-photo {
    height: 140px;
    overflow: hidden;
  }
  
  .undergraduate-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .undergraduate-card:hover .undergraduate-photo img {
    transform: scale(1.05);
  }
  
  .undergraduate-photo.no-image {
    background: linear-gradient(135deg, #105E96, #17A589);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .undergraduate-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .undergraduate-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #105E96;
    margin: 0 0 0.4rem;
  }
  
  .undergraduate-program {
    font-size: 0.9rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .undergraduate-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.8rem;
  }
  
  .undergraduate-tag {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
    background: rgba(16, 94, 150, 0.08);
    color: #105E96;
    font-size: 0.75rem;
  }
  
  .undergraduate-links {
    display: flex;
    gap: 0.6rem;
  }
  
  .undergraduate-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(16, 94, 150, 0.1);
    color: #105E96;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }
  
  .undergraduate-link:hover {
    background: #105E96;
    color: white;
    transform: translateY(-2px);
  }
  
  /* Intern students - smallest cards with lighter styling */
  .intern-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .intern-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(23, 165, 137, 0.1);
  }
  
  .intern-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(23, 165, 137, 0.3);
  }
  
  .intern-photo {
    height: 120px;
    overflow: hidden;
  }
  
  .intern-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }
  
  .intern-card:hover .intern-photo img {
    transform: scale(1.03);
  }
  
  .intern-photo.no-image {
    background: linear-gradient(135deg, rgba(16, 94, 150, 0.8), rgba(23, 165, 137, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2.2rem;
    font-weight: 600;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  .intern-info {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .intern-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #105E96;
    margin: 0 0 0.3rem;
  }
  
  .intern-program {
    font-size: 0.85rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
  
  .intern-duration {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.7rem;
    font-style: italic;
  }

  .intern-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 0.7rem;
  }
  
  .intern-tag {
    display: inline-block;
    padding: 0.15rem 0.4rem;
    border-radius: 12px;
    background: rgba(16, 94, 150, 0.06);
    color: #105E96;
    font-size: 0.7rem;
    border: 1px solid rgba(16, 94, 150, 0.1);
  }
  
  .intern-links {
    display: flex;
    gap: 0.5rem;
  }
  
  .intern-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(16, 94, 150, 0.08);
    color: #105E96;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.8rem;
  }
  
  .intern-link:hover {
    background: #17A589;
    color: white;
    transform: translateY(-1px);
  }
  
  /* Thesis entries styling */
  .thesis-list {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .thesis-year {
    margin-bottom: 3rem;
  }
  
  .thesis-year h3 {
    color: #105E96;
    font-size: 1.8rem;
    border-bottom: 3px solid #17A589;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .thesis-item {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border-left: 4px solid #17A589;
  }
  
  .thesis-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
  
  .thesis-title-cn {
    font-size: 1.2rem;
    font-weight: 700;
    color: #105E96;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
  
  .thesis-title-en {
    font-size: 1.1rem;
    font-weight: 600;
    color: #17A589;
    margin-bottom: 1rem;
    line-height: 1.4;
    font-style: italic;
  }
  
  .thesis-author {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }
  
  .thesis-divider {
    border: none;
    height: 1px;
    background: linear-gradient(to right, transparent, #17A589, transparent);
    margin: 2rem 0;
  }
  
  @media (max-width: 768px) {
    .professor-card {
      flex-direction: column;
    }

    .professor-photo {
      width: 100%;
      height: 300px;
    }

    .undergraduate-container {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }

    .intern-container {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem;
    }

    .thesis-item {
      padding: 1.5rem;
    }

    .thesis-title-cn {
      font-size: 1.1rem;
    }

    .thesis-title-en {
      font-size: 1rem;
    }
  }
</style>

<div class="member-container">
  <!-- Current Students Section -->
  <div class="section-heading">
    <h2>Current Students</h2>
  </div>
  
  <!-- Master's Students -->
  {% if site.data.members.current_students.masters %}
  <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Master's Students</h3>
  </div>
  
  <div class="members-list">
    {% for student in site.data.members.current_students.masters %}
    <div class="member-card">
      <div class="member-card-content">
        <div class="member-card-header">
          <h4 class="member-name">{{ student.name }}</h4>
          <span class="member-program">{{ student.program }}</span>
        </div>
        
        <div class="member-card-body">
          {% if student.research_areas %}
          <div class="member-tags">
            {% for area in student.research_areas %}
            <span class="member-tag">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
        
        <div class="member-card-footer">
          <div class="member-contact">
            <!-- Contact info placeholder -->
          </div>
          <div class="member-links">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="member-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="member-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="member-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  
  <!-- Undergraduate Students -->
  {% if site.data.members.current_students.undergraduates %}
  <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Undergraduate Students</h3>
  </div>
  
  <div class="members-list">
    {% for student in site.data.members.current_students.undergraduates %}
    <div class="member-card">
      <div class="member-card-content">
        <div class="member-card-header">
          <h4 class="member-name">{{ student.name }}</h4>
          <span class="member-program">{{ student.program }}</span>
        </div>
        
        <div class="member-card-body">
          {% if student.research_areas %}
          <div class="member-tags">
            {% for area in student.research_areas %}
            <span class="member-tag">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
        
        <div class="member-card-footer">
          <div class="member-contact">
            <!-- Contact info placeholder -->
          </div>
          <div class="member-links">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="member-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="member-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="member-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  
  <!-- Undergraduate Intern Students -->
  {% if site.data.members.current_students.interns %}
  <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Undergraduate Intern Students</h3>
  </div>

  <div class="members-list">
    {% for student in site.data.members.current_students.interns %}
    <div class="member-card">
      <div class="member-card-content">
        <div class="member-card-header">
          <h4 class="member-name">{{ student.name }}</h4>
          <span class="member-program">{{ student.program }}</span>
          {% if student.duration %}
          <span class="member-duration">{{ student.duration }}</span>
          {% endif %}
        </div>

        <div class="member-card-body">
          {% if student.research_areas %}
          <div class="member-tags">
            {% for area in student.research_areas %}
            <span class="member-tag">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="member-card-footer">
          <div class="member-contact">
            <!-- Contact info placeholder -->
          </div>
          <div class="member-links">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="member-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="member-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="member-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}

  <!-- Exchange Students -->
  {% if site.data.members.current_students.exchange %}
  <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Exchange Students</h3>
  </div>

  <div class="members-list">
    {% for student in site.data.members.current_students.exchange %}
    <div class="member-card">
      <div class="member-card-content">
        <div class="member-card-header">
          <h4 class="member-name">{{ student.name }}</h4>
          <span class="member-program">{{ student.program }}</span>
          {% if student.home_university %}
          <span class="member-duration">{{ student.home_university }}</span>
          {% endif %}
          {% if student.duration %}
          <span class="member-duration">{{ student.duration }}</span>
          {% endif %}
        </div>

        <div class="member-card-body">
          {% if student.research_areas %}
          <div class="member-tags">
            {% for area in student.research_areas %}
            <span class="member-tag">{{ area }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>

        <div class="member-card-footer">
          <div class="member-contact">
            <!-- Contact info placeholder -->
          </div>
          <div class="member-links">
            {% if student.email %}
            <a href="mailto:{{ student.email }}" class="member-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            {% endif %}
            {% if student.github %}
            <a href="{{ student.github }}" target="_blank" class="member-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            {% endif %}
            {% if student.linkedin %}
            <a href="{{ student.linkedin }}" target="_blank" class="member-link" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  <!-- Thesis Archives Section -->
  <div class="section-heading">
    <h2>Graduated Master & Thesis</h2>
  </div>
  
  <div class="thesis-list">
    {% for year_data in site.data.members.graduated_students %}
    <div class="thesis-year">
      <h3>{{ year_data.year }}</h3>
      {% for student in year_data.students %}
      <div class="thesis-item">
        <div class="thesis-title-cn">{{ student.thesis_cn }}</div>
        <div class="thesis-title-en">{{ student.thesis_en }}</div>
        <div class="thesis-author">{{ student.name }} ({{ student.name_en }})</div>
      </div>
      {% unless forloop.last %}
      <hr class="thesis-divider">
      {% endunless %}
      {% endfor %}
    </div>
    {% endfor %}
  </div>
</div>
