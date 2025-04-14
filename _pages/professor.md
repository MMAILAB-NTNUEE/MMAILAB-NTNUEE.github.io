---
title: "About the Professor"
layout: splash
permalink: /professor/
classes:
  - wide
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

<style>
  .professor-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .page-heading {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .page-heading h1 {
    position: relative;
    display: inline-block;
    padding-bottom: 15px;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .page-heading h1:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #17A589;
  }
  
  .page-intro {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 4rem;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #444;
  }
  
  .professor-container {
    margin-bottom: 5rem;
  }
  
  .professor-profile {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid #eee;
  }
  
  .professor-profile:last-child {
    border-bottom: none;
  }
  
  .professor-image {
    flex: 0 0 300px;
  }
  
  .professor-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  .professor-details {
    flex: 1;
    min-width: 300px;
  }
  
  .professor-name {
    font-size: 2.2rem;
    font-weight: 700;
    color: #105E96;
    margin: 0 0 0.3rem;
  }
  
  .professor-title {
    font-size: 1.2rem;
    color: #17A589;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  .professor-bio {
    margin-bottom: 2rem;
    line-height: 1.8;
    color: #444;
    font-size: 1.05rem;
  }
  
  .section-title {
    font-size: 1.3rem;
    color: #105E96;
    margin: 1.5rem 0 1rem;
    font-weight: 600;
  }
  
  .interests-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-bottom: 2rem;
  }
  
  .interest-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background: rgba(23, 165, 137, 0.1);
    color: #17A589;
    font-size: 1rem;
    font-weight: 500;
  }
  
  .education-item {
    margin-bottom: 1rem;
  }
  
  .education-degree {
    font-weight: 600;
    color: #333;
  }
  
  .education-university {
    color: #17A589;
  }
  
  .education-year {
    color: #777;
    font-size: 0.9rem;
  }
  
  .professor-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 2rem 0;
  }
  
  .stat-item {
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #105E96;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: #555;
  }
  
  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .contact-link {
    display: inline-flex;
    align-items: center;
    padding: 0.7rem 1.4rem;
    border-radius: 30px;
    background: rgba(16, 94, 150, 0.1);
    color: #105E96;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .contact-link:hover {
    background: #105E96;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .contact-link i {
    margin-right: 0.7rem;
    font-size: 1.2rem;
  }
  
  .awards-list {
    margin-bottom: 2rem;
  }
  
  .award-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  
  .award-icon {
    color: #17A589;
    margin-right: 1rem;
    font-size: 1.1rem;
    margin-top: 0.2rem;
  }
  
  .award-content {
    flex: 1;
  }
  
  .award-name {
    font-weight: 600;
    color: #333;
  }
  
  .award-org {
    color: #666;
    font-size: 0.9rem;
  }
  
  .award-year {
    color: #17A589;
    font-weight: 500;
  }
  
  .publications-highlight {
    margin-bottom: 2rem;
  }
  
  .publication-item {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;
  }
  
  .publication-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    background-color: #17A589;
    border-radius: 50%;
  }
  
  .publication-title {
    font-weight: 600;
    color: #333;
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
  }
  
  .publication-authors {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
  
  .publication-venue {
    color: #17A589;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  .publication-year {
    color: #777;
    font-size: 0.9rem;
  }
  
  .teaching-list {
    margin-bottom: 2rem;
  }
  
  .teaching-item {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #eee;
  }
  
  .teaching-item:last-child {
    border-bottom: none;
  }
  
  .teaching-course {
    font-weight: 600;
    color: #333;
  }
  
  .teaching-code {
    color: #17A589;
    font-weight: 500;
  }
  
  .teaching-sem {
    color: #777;
    font-size: 0.9rem;
  }
  
  .all-publications-link {
    display: inline-block;
    margin-top: 1rem;
    color: #105E96;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .all-publications-link:hover {
    color: #17A589;
    text-decoration: underline;
  }
  
  .all-publications-link i {
    margin-left: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .professor-profile {
      flex-direction: column;
      gap: 2rem;
    }
    
    .professor-image {
      flex: 0 0 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    
    .professor-stats {
      flex-direction: column;
      gap: 1rem;
    }
    
    .stat-item {
      min-width: 100%;
    }
  }
</style>

<div class="professor-page">
  <div class="page-heading">
    <h1>Lab Director & Faculty</h1>
  </div>
  
  <div class="page-intro">
    Our laboratory is led by distinguished faculty members who are internationally recognized for their contributions to the fields of multimedia analysis, computer vision, and artificial intelligence. Their pioneering research, mentorship, and collaborations drive our lab's mission to advance the frontiers of AI research.
  </div>
  
  <div class="professor-container">
    <!-- Professor 1 -->
    <div class="professor-profile">
      <div class="professor-image">
        <img src="/assets/images/professor1.jpg" alt="Professor Jane Chen">
      </div>
      
      <div class="professor-details">
        <h2 class="professor-name">Prof. Jane Chen, Ph.D.</h2>
        <p class="professor-title">Lab Director & Professor, Department of Electrical Engineering</p>
        
        <div class="professor-bio">
          <p>Prof. Jane Chen is the founder and director of the Multimedia and Artificial Intelligence Laboratory (MAILAB) at National Taiwan Normal University. She received her Ph.D. in Computer Science from Stanford University in 2010 and has since established herself as a leading researcher in computer vision and deep learning applications.</p>
          
          <p>Her research addresses fundamental challenges in visual understanding, medical image analysis, and neural network architectures. Prof. Chen has published over 100 papers in top-tier conferences and journals including CVPR, ICCV, NeurIPS, and IEEE Transactions on Pattern Analysis and Machine Intelligence.</p>
          
          <p>Before joining NTNU, she was a research scientist at Google Research, where she worked on large-scale visual recognition systems. She is currently serving as an Associate Editor for the IEEE Transactions on Pattern Analysis and Machine Intelligence and regularly serves on the program committees of major AI conferences.</p>
        </div>
        
        <div class="professor-stats">
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Publications</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Ph.D. Students Advised</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-number">8000+</div>
            <div class="stat-label">Citations</div>
          </div>
          
          <div class="stat-item">
            <div class="stat-number">12</div>
            <div class="stat-label">Patents</div>
          </div>
        </div>
        
        <h3 class="section-title">Research Interests</h3>
        <div class="interests-tags">
          <span class="interest-tag">Computer Vision</span>
          <span class="interest-tag">Deep Learning</span>
          <span class="interest-tag">Medical Image Analysis</span>
          <span class="interest-tag">Visual Understanding</span>
          <span class="interest-tag">Neural Networks</span>
          <span class="interest-tag">Multimodal Learning</span>
        </div>
        
        <h3 class="section-title">Education</h3>
        <div class="education-list">
          <div class="education-item">
            <div class="education-degree">Ph.D. in Computer Science</div>
            <div class="education-university">Stanford University</div>
            <div class="education-year">2010</div>
          </div>
          
          <div class="education-item">
            <div class="education-degree">M.S. in Electrical Engineering</div>
            <div class="education-university">Massachusetts Institute of Technology</div>
            <div class="education-year">2005</div>
          </div>
          
          <div class="education-item">
            <div class="education-degree">B.S. in Computer Science</div>
            <div class="education-university">National Taiwan University</div>
            <div class="education-year">2003</div>
          </div>
        </div>
        
        <h3 class="section-title">Selected Awards & Honors</h3>
        <div class="awards-list">
          <div class="award-item">
            <div class="award-icon"><i class="fas fa-award"></i></div>
            <div class="award-content">
              <div class="award-name">Outstanding Research Award</div>
              <div class="award-org">Ministry of Science and Technology, Taiwan</div>
              <div class="award-year">2023</div>
            </div>
          </div>
          
          <div class="award-item">
            <div class="award-icon"><i class="fas fa-award"></i></div>
            <div class="award-content">
              <div class="award-name">Best Paper Award</div>
              <div class="award-org">IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</div>
              <div class="award-year">2022</div>
            </div>
          </div>
          
          <div class="award-item">
            <div class="award-icon"><i class="fas fa-award"></i></div>
            <div class="award-content">
              <div class="award-name">NTNU Excellence in Teaching Award</div>
              <div class="award-org">National Taiwan Normal University</div>
              <div class="award-year">2020</div>
            </div>
          </div>
        </div>
        
        <h3 class="section-title">Selected Publications</h3>
        <div class="publications-highlight">
          <div class="publication-item">
            <div class="publication-title">Dual-Path Transformer for Medical Image Segmentation with Incomplete Annotations</div>
            <div class="publication-authors">J. Chen, A. Johnson, D. Lee, M. Wang</div>
            <div class="publication-venue">IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</div>
            <div class="publication-year">2025</div>
          </div>
          
          <div class="publication-item">
            <div class="publication-title">Understanding Long-Range Dependencies in Multi-Modal Vision-Language Models</div>
            <div class="publication-authors">J. Chen, R. Zhang, K. Liu, S. Kim</div>
            <div class="publication-venue">Neural Information Processing Systems (NeurIPS)</div>
            <div class="publication-year">2024</div>
          </div>
          
          <div class="publication-item">
            <div class="publication-title">Efficient Neural Architectures for Edge-Based Visual Recognition</div>
            <div class="publication-authors">J. Chen, S. Kim, L. Huang</div>
            <div class="publication-venue">International Conference on Computer Vision (ICCV)</div>
            <div class="publication-year">2023</div>
          </div>
        </div>
        
        <a href="/publications" class="all-publications-link">View all publications <i class="fas fa-long-arrow-alt-right"></i></a>
        
        <h3 class="section-title">Current Teaching</h3>
        <div class="teaching-list">
          <div class="teaching-item">
            <div class="teaching-course">Advanced Computer Vision</div>
            <div class="teaching-code">EE7015</div>
            <div class="teaching-sem">Spring 2025</div>
          </div>
          
          <div class="teaching-item">
            <div class="teaching-course">Deep Learning for Visual Recognition</div>
            <div class="teaching-code">EE6530</div>
            <div class="teaching-sem">Fall 2024</div>
          </div>
          
          <div class="teaching-item">
            <div class="teaching-course">Research Methods in AI</div>
            <div class="teaching-code">EE8020</div>
            <div class="teaching-sem">Fall 2024 (Graduate Seminar)</div>
          </div>
        </div>
        
        <h3 class="section-title">Contact</h3>
        <div class="contact-links">
          <a href="mailto:jane.chen@ntnu.edu.tw" class="contact-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://scholar.google.com/citations?user=EXAMPLE" target="_blank" class="contact-link">
            <i class="fas fa-graduation-cap"></i> Google Scholar
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fas fa-globe"></i> Personal Website
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
    
    
  </div>
</div>