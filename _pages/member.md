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
  
  /* Students section styles */
  .students-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .student-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .student-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
  
  .student-photo {
    height: 180px;
    overflow: hidden;
  }
  
  .student-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .student-card:hover .student-photo img {
    transform: scale(1.05);
  }
  
  .student-info {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .student-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: #105E96;
    margin: 0 0 0.5rem;
  }
  
  .student-program {
    font-size: 0.95rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  
  .student-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
  
  .student-tag {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    background: rgba(16, 94, 150, 0.08);
    color: #105E96;
    font-size: 0.8rem;
  }
  
  .student-links {
    display: flex;
    gap: 0.8rem;
  }
  
  .student-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(16, 94, 150, 0.1);
    color: #105E96;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .student-link:hover {
    background: #105E96;
    color: white;
    transform: translateY(-3px);
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
  <!-- Current Students Section
  <div class="section-heading">
    <h2>Current Students</h2>
  </div> -->
  
  <!-- Master's Students -->
  <!-- <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Master's Students</h3>
  </div> -->
  
  <!-- <div class="students-container">
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/student3.jpg" alt="Thomas Wu">
      </div>
      <div class="student-info">
        <h3 class="student-name">Thomas Wu</h3>
        <p class="student-program">Master's Student (2nd Year)</p>
        <div class="student-tags">
          <span class="student-tag">3D Vision</span>
          <span class="student-tag">Scene Understanding</span>
          <span class="student-tag">Reconstruction</span>
        </div>
        <div class="student-links">
          <a href="mailto:thomas.wu@ntnu.edu.tw" class="student-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="student-card">
      <div class="student-photo no-image">
        LH
      </div>
      <div class="student-info">
        <h3 class="student-name">Lisa Huang</h3>
        <p class="student-program">Master's Student (1st Year)</p>
        <div class="student-tags">
          <span class="student-tag">Attention Mechanisms</span>
          <span class="student-tag">Efficient Computing</span>
          <span class="student-tag">Visual Recognition</span>
        </div>
        <div class="student-links">
          <a href="mailto:lisa.huang@ntnu.edu.tw" class="student-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
   -->
  <!-- Undergraduate Students -->
  <!-- <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Undergraduate Students</h3>
  </div>
  
  <div class="undergraduate-container">
    <div class="undergraduate-card">
      <div class="undergraduate-photo">
        <img src="/assets/images/student-undergrad1.jpg" alt="Alex Chen">
      </div>
      <div class="undergraduate-info">
        <h3 class="undergraduate-name">Alex Chen</h3>
        <p class="undergraduate-program">Computer Science (4th Year)</p>
        <div class="undergraduate-tags">
          <span class="undergraduate-tag">Image Classification</span>
          <span class="undergraduate-tag">Conservation</span>
          <span class="undergraduate-tag">Wildlife</span>
        </div>
        <div class="undergraduate-links">
          <a href="mailto:alex.chen@ntnu.edu.tw" class="undergraduate-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="undergraduate-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="undergraduate-card">
      <div class="undergraduate-photo no-image">
        MK
      </div>
      <div class="undergraduate-info">
        <h3 class="undergraduate-name">Maria Kim</h3>
        <p class="undergraduate-program">Electrical Engineering (3rd Year)</p>
        <div class="undergraduate-tags">
          <span class="undergraduate-tag">Model Compression</span>
          <span class="undergraduate-tag">Mobile AI</span>
          <span class="undergraduate-tag">IoT</span>
        </div>
        <div class="undergraduate-links">
          <a href="mailto:maria.kim@ntnu.edu.tw" class="undergraduate-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="undergraduate-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="undergraduate-card">
      <div class="undergraduate-photo no-image">
        DL
      </div>
      <div class="undergraduate-info">
        <h3 class="undergraduate-name">David Lee</h3>
        <p class="undergraduate-program">Information Engineering (2nd Year)</p>
        <div class="undergraduate-tags">
          <span class="undergraduate-tag">Medical AI</span>
          <span class="undergraduate-tag">Healthcare</span>
          <span class="undergraduate-tag">X-ray Analysis</span>
        </div>
        <div class="undergraduate-links">
          <a href="mailto:david.lee@ntnu.edu.tw" class="undergraduate-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="undergraduate-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
   -->
  <!-- Undergraduate Intern Students -->
  <!-- <div class="section-heading">
    <h3 style="font-size: 1.6rem; margin-bottom: 2rem;">Undergraduate Intern Students</h3>
  </div>
  
  <div class="intern-container">
    <div class="intern-card">
      <div class="intern-photo no-image">
        JS
      </div>
      <div class="intern-info">
        <h3 class="intern-name">Jenny Smith</h3>
        <p class="intern-program">Computer Science (3rd Year)</p>
        <p class="intern-duration">Summer 2024 Intern</p>
        <div class="intern-tags">
          <span class="intern-tag">Data Augmentation</span>
          <span class="intern-tag">Small Datasets</span>
          <span class="intern-tag">Deep Learning</span>
        </div>
        <div class="intern-links">
          <a href="mailto:jenny.smith@ntnu.edu.tw" class="intern-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="intern-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="intern-card">
      <div class="intern-photo">
        <img src="/assets/images/intern-student1.jpg" alt="Kevin Wang">
      </div>
      <div class="intern-info">
        <h3 class="intern-name">Kevin Wang</h3>
        <p class="intern-program">Information Engineering (2nd Year)</p>
        <p class="intern-duration">Fall 2024 Intern</p>
        <div class="intern-tags">
          <span class="intern-tag">ML Testing</span>
          <span class="intern-tag">Automation</span>
          <span class="intern-tag">Quality Assurance</span>
        </div>
        <div class="intern-links">
          <a href="mailto:kevin.wang@ntnu.edu.tw" class="intern-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="intern-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="intern-card">
      <div class="intern-photo no-image">
        AL
      </div>
      <div class="intern-info">
        <h3 class="intern-name">Amy Liu</h3>
        <p class="intern-program">Electrical Engineering (1st Year)</p>
        <p class="intern-duration">Spring 2024 Intern</p>
        <div class="intern-tags">
          <span class="intern-tag">Computer Vision</span>
          <span class="intern-tag">Image Processing</span>
          <span class="intern-tag">Feature Extraction</span>
        </div>
        <div class="intern-links">
          <a href="mailto:amy.liu@ntnu.edu.tw" class="intern-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="intern-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="intern-card">
      <div class="intern-photo no-image">
        RT
      </div>
      <div class="intern-info">
        <h3 class="intern-name">Ryan Thompson</h3>
        <p class="intern-program">Mathematics (4th Year)</p>
        <p class="intern-duration">Summer 2024 Intern</p>
        <div class="intern-tags">
          <span class="intern-tag">Optimization</span>
          <span class="intern-tag">Neural Networks</span>
          <span class="intern-tag">Mathematics</span>
        </div>
        <div class="intern-links">
          <a href="mailto:ryan.thompson@ntnu.edu.tw" class="intern-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="intern-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
   -->
  <!-- Thesis Archives Section -->
  <div class="section-heading">
    <h2>Graduated Master & Thesis</h2>
  </div>
  
  <div class="thesis-list">
    <!-- 2024 -->
    <div class="thesis-year">
      <h3>2024</h3>
      <div class="thesis-item">
        <div class="thesis-title-cn">基於 Retinex 理論之輕量化自監督式影像節能顯示深度學習網路</div>
        <div class="thesis-title-en">Lightweight Retinex-based Self-Supervised Deep Learning Network for Power-Efficient Image Display</div>
        <div class="thesis-author">王鬱紹 (Wang, Yu-Shao)</div>
      </div>
    </div>
    
    <!-- 2023 -->
    <div class="thesis-year">
      <h3>2023</h3>
      <div class="thesis-item">
        <div class="thesis-title-cn">基於雙重注意力機制之逆半色調深度學習網路</div>
        <div class="thesis-title-en">Deep Inverse Halftoning Network based on Dual Attention Mechanisms</div>
        <div class="thesis-author">李汪翰 (Lee, Wang-Han)</div>
      </div>
      <hr class="thesis-divider">
      <div class="thesis-item">
        <div class="thesis-title-cn">基於雙重注意力機制之視網膜血管分割深度學習網路</div>
        <div class="thesis-title-en">Deep Retinal Vessel Segmentation Network based on Dual Attention Mechanism</div>
        <div class="thesis-author">胡景閎 (Hu, Jing-Hung)</div>
      </div>
    </div>
    
    <!-- 2022 -->
    <div class="thesis-year">
      <h3>2022</h3>
      <div class="thesis-item">
        <div class="thesis-title-cn">用於高光譜和多光譜影像融合的知識蒸餾師生網路</div>
        <div class="thesis-title-en">Knowledge Distillation Teacher-Student Network for Hyperspectral and Multispectral Image Fusion</div>
        <div class="thesis-author">倪至謙 (Ni, Chih-Chien)</div>
      </div>
      <hr class="thesis-divider">
      <div class="thesis-item">
        <div class="thesis-title-cn">基於雨嵌入一致性和注意力機制之單張影像去雨</div>
        <div class="thesis-title-en">Single Image Deraining Using Rain Embedding Consistency and Attention Mechanism</div>
        <div class="thesis-author">黃冠樺 (Huang, Guan-Hua)</div>
      </div>
      <hr class="thesis-divider">
      <div class="thesis-item">
        <div class="thesis-title-cn">基於 SwinTransformer 及深度學習網路之高光譜影像融合</div>
        <div class="thesis-title-en">SwinDFN：Deep Hyperspectral and Multispectral Image Fusion based on SwinTransformer</div>
        <div class="thesis-author">李沃晏 (Li, Wo-Yen)</div>
      </div>
      <hr class="thesis-divider">
      <div class="thesis-item">
        <div class="thesis-title-cn">基於非監督式生成對抗網路及對比學習之水下影像品質回復</div>
        <div class="thesis-title-en">Unsupervised Generative Adversarial Network and Contrastive Learning for Underwater Image Restoration</div>
        <div class="thesis-author">宋奕泓 (Sung, Yi-Hung)</div>
      </div>
    </div>
    
    <!-- 2021 -->
    <div class="thesis-year">
      <h3>2021</h3>
      <div class="thesis-item">
        <div class="thesis-title-cn">基於非監督式跨領域深度學習之單張影像雜訊去除</div>
        <div class="thesis-title-en">Unsupervised Cross Domain Deep Learning for Single Image Noise Removal</div>
        <div class="thesis-author">蔡洪弦 (Tsai, Hong-Xian)</div>
      </div>
      <hr class="thesis-divider">
      <div class="thesis-item">
        <div class="thesis-title-cn">基於變分自動編碼器之解糾纏模型設計與應用:單細胞RNA定序之聚類與細胞擾動之預測</div>
        <div class="thesis-title-en">Variational autoencoder based disentangle model design and application: scRNA-seq clustering and cell perturbation prediction</div>
        <div class="thesis-author">陳則光 (Chen, Ze-Guang)</div>
      </div>
    </div>
  </div>
</div>
