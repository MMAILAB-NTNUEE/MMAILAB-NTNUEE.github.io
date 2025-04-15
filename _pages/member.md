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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
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
    height: 220px;
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
    padding: 1.5rem;
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
  
  .student-research {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 1rem;
    flex-grow: 1;
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
  
  @media (max-width: 768px) {
    .professor-card {
      flex-direction: column;
    }
    
    .professor-photo {
      width: 100%;
      height: 300px;
    }
  }
</style>

<div class="feature-section">
  <div class="feature-container">
    <div class="section-heading">
      <h2>Coming Soon</h2>
    </div>
    
    <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem;">
      We're currently updating our information.
    </p>
    
    <div style="text-align: center; margin-bottom: 3rem;">
      <p>For urgent inquiries about research opportunities, please contact us at:</p>
      <a href="mailto:mailab@ntnu.edu.tw" class="btn btn--primary">mailab@ntnu.edu.tw</a>
    </div>
  </div>
</div>
