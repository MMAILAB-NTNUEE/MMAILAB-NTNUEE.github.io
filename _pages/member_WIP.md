---
title: "Lab Members"
layout: splash
permalink: /member_WIP/
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


<div class="member-container">
  <!-- Professor Section -->
  <div class="section-heading">
    <h2>Faculty</h2>
  </div>
  
  <div class="professor-container">
    <div class="professor-card">
      <div class="professor-photo">
        <img src="/assets/images/professor1.jpg" alt="Professor Jane Chen">
      </div>
      <div class="professor-info">
        <h3 class="professor-name">Prof. Jane Chen</h3>
        <p class="professor-title">Lab Director, Professor</p>
        <p class="professor-bio">
          Prof. Jane Chen is the founder and director of the Multimedia and Artificial Intelligence Laboratory (MMAILAB) at National Taiwan Normal University. She received her Ph.D. in Computer Science from Stanford University in 2010. Her research focuses on developing advanced algorithms for computer vision and deep learning, with applications in healthcare, autonomous systems, and multimedia analysis.
        </p>
        <div class="research-interests">
          <h4>Research Interests:</h4>
          <div class="interests-tags">
            <span class="interest-tag">Computer Vision</span>
            <span class="interest-tag">Deep Learning</span>
            <span class="interest-tag">Medical Image Analysis</span>
            <span class="interest-tag">Visual Understanding</span>
            <span class="interest-tag">Neural Networks</span>
          </div>
        </div>
        <div class="professor-contact">
          <a href="mailto:jane.chen@ntnu.edu.tw" class="contact-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://scholar.google.com/" target="_blank" class="contact-link">
            <i class="fas fa-graduation-cap"></i> Google Scholar
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fas fa-globe"></i> Personal Website
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
    
    <div class="professor-card">
      <div class="professor-photo">
        <img src="/assets/images/professor2.jpg" alt="Professor Michael Wang">
      </div>
      <div class="professor-info">
        <h3 class="professor-name">Prof. Michael Wang</h3>
        <p class="professor-title">Associate Professor</p>
        <p class="professor-bio">
          Prof. Michael Wang joined MMAILAB in 2015 after completing his Ph.D. at the University of California, Berkeley. He specializes in machine learning and multimedia analysis, with a focus on developing algorithms for multimodal learning, reinforcement learning, and human-computer interaction. His work has been published in top-tier conferences such as CVPR, ICCV, and NeurIPS.
        </p>
        <div class="research-interests">
          <h4>Research Interests:</h4>
          <div class="interests-tags">
            <span class="interest-tag">Machine Learning</span>
            <span class="interest-tag">Multimedia Analysis</span>
            <span class="interest-tag">Reinforcement Learning</span>
            <span class="interest-tag">Human-Computer Interaction</span>
            <span class="interest-tag">Multimodal Learning</span>
          </div>
        </div>
        <div class="professor-contact">
          <a href="mailto:michael.wang@ntnu.edu.tw" class="contact-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://scholar.google.com/" target="_blank" class="contact-link">
            <i class="fas fa-graduation-cap"></i> Google Scholar
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fas fa-globe"></i> Personal Website
          </a>
          <a href="#" target="_blank" class="contact-link">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Research Staff Section -->
  <div class="section-heading">
    <h2>Research Staff</h2>
  </div>
  
  <div class="students-container">
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/researcher1.jpg" alt="Dr. Sarah Kim">
      </div>
      <div class="student-info">
        <h3 class="student-name">Dr. Sarah Kim</h3>
        <p class="student-program">Postdoctoral Researcher</p>
        <p class="student-research">
          Dr. Kim's research focuses on efficient neural networks for edge devices and real-time computer vision applications. She has developed novel architectures that reduce computational requirements while maintaining high accuracy.
        </p>
        <div class="student-tags">
          <span class="student-tag">Efficient Deep Learning</span>
          <span class="student-tag">Edge Computing</span>
          <span class="student-tag">Real-time Vision</span>
        </div>
        <div class="student-links">
          <a href="mailto:sarah.kim@ntnu.edu.tw" class="student-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="Google Scholar">
            <i class="fas fa-graduation-cap"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/researcher2.jpg" alt="Dr. David Lee">
      </div>
      <div class="student-info">
        <h3 class="student-name">Dr. David Lee</h3>
        <p class="student-program">Postdoctoral Researcher</p>
        <p class="student-research">
          Dr. Lee works on medical image analysis using deep learning, with a focus on segmentation and classification tasks. His research has contributed to advancements in early disease detection through automated analysis of medical images.
        </p>
        <div class="student-tags">
          <span class="student-tag">Medical AI</span>
          <span class="student-tag">Image Segmentation</span>
          <span class="student-tag">Healthcare</span>
        </div>
        <div class="student-links">
          <a href="mailto:david.lee@ntnu.edu.tw" class="student-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="Google Scholar">
            <i class="fas fa-graduation-cap"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/researcher3.jpg" alt="Dr. Emily Chang">
      </div>
      <div class="student-info">
        <h3 class="student-name">Dr. Emily Chang</h3>
        <p class="student-program">Research Associate</p>
        <p class="student-research">
          Dr. Chang develops novel self-supervised learning approaches for image and video understanding. Her work focuses on learning meaningful representations from unlabeled data, reducing the need for extensive human annotations.
        </p>
        <div class="student-tags">
          <span class="student-tag">Self-supervised Learning</span>
          <span class="student-tag">Video Understanding</span>
          <span class="student-tag">Representation Learning</span>
        </div>
        <div class="student-links">
          <a href="mailto:emily.chang@ntnu.edu.tw" class="student-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="Google Scholar">
            <i class="fas fa-graduation-cap"></i>
          </a>
          <a href="#" target="_blank" class="student-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- PhD Students Section -->
  <div class="section-heading">
    <h2>PhD Students</h2>
  </div>
  
  <div class="students-container">
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/student1.jpg" alt="Robert Zhang">
      </div>
      <div class="student-info">
        <h3 class="student-name">Robert Zhang</h3>
        <p class="student-program">PhD Candidate (4th Year)</p>
        <p class="student-research">
          Robert is researching vision-language models for cross-modal understanding and generation. His work explores the intersection of computer vision and natural language processing to build systems that can reason about visual content.
        </p>
        <div class="student-tags">
          <span class="student-tag">Vision-Language Models</span>
          <span class="student-tag">Multimodal Learning</span>
          <span class="student-tag">Cross-modal Reasoning</span>
        </div>
        <div class="student-links">
          <a href="mailto:robert.zhang@ntnu.edu.tw" class="student-link" title="Email">
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
      <div class="student-photo">
        <img src="/assets/images/student2.jpg" alt="Jennifer Lin">
      </div>
      <div class="student-info">
        <h3 class="student-name">Jennifer Lin</h3>
        <p class="student-program">PhD Student (3rd Year)</p>
        <p class="student-research">
          Jennifer works on multimodal fusion techniques for video analysis and activity recognition. Her research aims to develop algorithms that can effectively integrate information from multiple modalities to understand complex activities.
        </p>
        <div class="student-tags">
          <span class="student-tag">Video Analysis</span>
          <span class="student-tag">Activity Recognition</span>
          <span class="student-tag">Multimodal Fusion</span>
        </div>
        <div class="student-links">
          <a href="mailto:jennifer.lin@ntnu.edu.tw" class="student-link" title="Email">
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
      <div class="student-photo">
        <img src="/assets/images/student5.jpg" alt="Mark Chen">
      </div>
      <div class="student-info">
        <h3 class="student-name">Mark Chen</h3>
        <p class="student-program">PhD Student (2nd Year)</p>
        <p class="student-research">
          Mark is developing advanced generative models for image synthesis and editing. His research explores techniques to control generative processes for more interpretable and useful content creation.
        </p>
        <div class="student-tags">
          <span class="student-tag">Generative Models</span>
          <span class="student-tag">Diffusion Models</span>
          <span class="student-tag">Controllable Generation</span>
        </div>
        <div class="student-links">
          <a href="mailto:mark.chen@ntnu.edu.tw" class="student-link" title="Email">
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
      <div class="student-photo">
        <img src="/assets/images/student6.jpg" alt="Sophia Wong">
      </div>
      <div class="student-info">
        <h3 class="student-name">Sophia Wong</h3>
        <p class="student-program">PhD Student (1st Year)</p>
        <p class="student-research">
          Sophia is researching explainable AI and interpretable deep learning models. Her work focuses on making computer vision systems more transparent and accountable in their decision-making processes.
        </p>
        <div class="student-tags">
          <span class="student-tag">Explainable AI</span>
          <span class="student-tag">Interpretable ML</span>
          <span class="student-tag">Ethical AI</span>
        </div>
        <div class="student-links">
          <a href="mailto:sophia.wong@ntnu.edu.tw" class="student-link" title="Email">
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
  
  <!-- Master's Students Section -->
  <div class="section-heading">
    <h2>Master's Students</h2>
  </div>
  
  <div class="students-container">
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/student3.jpg" alt="Thomas Wu">
      </div>
      <div class="student-info">
        <h3 class="student-name">Thomas Wu</h3>
        <p class="student-program">Master's Student (2nd Year)</p>
        <p class="student-research">
          Thomas is developing neural networks for 3D scene understanding and reconstruction. His research focuses on extracting 3D information from 2D images to create accurate models of real-world environments.
        </p>
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
      <div class="student-photo">
        <img src="/assets/images/student4.jpg" alt="Lisa Huang">
      </div>
      <div class="student-info">
        <h3 class="student-name">Lisa Huang</h3>
        <p class="student-program">Master's Student (2nd Year)</p>
        <p class="student-research">
          Lisa is working on attention mechanisms for efficient image and video processing. Her research examines ways to improve computational efficiency while maintaining high performance in visual recognition tasks.
        </p>
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
    
    <div class="student-card">
      <div class="student-photo">
        <img src="/assets/images/student7.jpg" alt="Ryan Liu">
      </div>
      <div class="student-info">
        <h3 class="student-name">Ryan Liu</h3>
        <p class="student-program">Master's Student (1st Year)</p>
        <p class="student-research">
          Ryan is studying few-shot learning and meta-learning approaches for computer vision. His work aims to develop models that can learn from limited examples and generalize effectively to new tasks.
        </p>
        <div class="student-tags">
          <span class="student-tag">Few-shot Learning</span>
          <span class="student-tag">Meta-learning</span>
          <span class="student-tag">Transfer Learning</span>
        </div>
        <div class="student-links">
          <a href="mailto:ryan.liu@ntnu.edu.tw" class="student-link" title="Email">
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
      <div class="student-photo">
        <img src="/assets/images/student8.jpg" alt="Michelle Yang">
      </div>
      <div class="student-info">
        <h3 class="student-name">Michelle Yang</h3>
        <p class="student-program">Master's Student (1st Year)</p>
        <p class="student-research">
          Michelle is researching adversarial robustness and security in deep learning models. Her work focuses on developing defense mechanisms against adversarial attacks on computer vision systems.
        </p>
        <div class="student-tags">
          <span class="student-tag">Adversarial Robustness</span>
          <span class="student-tag">Security</span>
          <span class="student-tag">Defense Mechanisms</span>
        </div>
        <div class="student-links">
          <a href="mailto:michelle.yang@ntnu.edu.tw" class="student-link" title="Email">
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
  
  <!-- Alumni Section -->
  <div class="section-heading">
    <h2>Alumni</h2>
  </div>
  
  <div class="alumni-list">
    <div class="alumni-category">
      <h3>PhD Graduates</h3>
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Dr. Alex Johnson</span>
          <span class="alumni-graduation">(2023)</span>
        </div>
        <span class="alumni-current">Now Assistant Professor at National Taiwan University</span>
      </div>
      
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Dr. Michelle Chen</span>
          <span class="alumni-graduation">(2022)</span>
        </div>
        <span class="alumni-current">Now Research Scientist at Google Research</span>
      </div>
      
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Dr. Kevin Liu</span>
          <span class="alumni-graduation">(2021)</span>
        </div>
        <span class="alumni-current">Now Senior AI Engineer at NVIDIA</span>
      </div>
    </div>
    
    <div class="alumni-category">
      <h3>Master's Graduates</h3>
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Sophia Wang</span>
          <span class="alumni-graduation">(2024)</span>
        </div>
        <span class="alumni-current">Now PhD Student at Stanford University</span>
      </div>
      
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Jason Chen</span>
          <span class="alumni-graduation">(2023)</span>
        </div>
        <span class="alumni-current">Now Machine Learning Engineer at Microsoft</span>
      </div>
      
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Amy Lin</span>
          <span class="alumni-graduation">(2023)</span>
        </div>
        <span class="alumni-current">Now Computer Vision Engineer at MediaTek</span>
      </div>
      
      <div class="alumni-item">
        <div class="alumni-info">
          <span class="alumni-name">Brian Kuo</span>
          <span class="alumni-graduation">(2022)</span>
        </div>
        <span class="alumni-current">Now AI Researcher at Academia Sinica</span>
      </div>
    </div>
  </div>
  
  <!-- Join Us Section -->
  <div class="section-heading">
    <h2>Join Our Lab</h2>
  </div>
  
  <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;">
    <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">
      We are always looking for talented and motivated students and researchers to join our lab. If you're interested in computer vision, machine learning, and multimedia analysis, we encourage you to apply. We welcome students from diverse backgrounds and with various expertise.
    </p>
    <a href="/join/" style="display: inline-block; padding: 1rem 2rem; background: #105E96; color: white; text-decoration: none; border-radius: 50px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
      View Opportunities
    </a>
  </div>
</div> -->