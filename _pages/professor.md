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
  
  <div class="professor-container">
    <!-- Professor 1 -->
    <div class="professor-profile">
      <div class="professor-image">
        <img src="/assets/images/professor.png">
      </div>
      
    <div class="professor-details">
        <h2 class="professor-name">Prof. 康立威 (Li-Wei Kang), Ph.D.</h2>
        <p class="professor-title">Lab Director & Professor, Department of Electrical Engineering</p>
        
        <div class="professor-bio">
          <p>Prof. Li-Wei Kang is a Professor in the Department of Electrical Engineering at National Taiwan Normal University (NTNU) in Taipei, Taiwan. He also serves in the Graduate Institute of AI Interdisciplinary Applied Technology at NTNU. He earned his B.S., M.S., and Ph.D. degrees in Computer Science from National Chung Cheng University in 1997, 1999, and 2005, respectively.</p>
          
          <p>Dr. Kang's research interests span computer vision, image processing, multimedia content analysis, and artificial intelligence applications. He leads the Multimedia and Artificial Intelligence Lab at NTNU, which focuses on developing innovative solutions in these areas.</p>
          
          <p>Throughout his career, Dr. Kang has held several academic positions, including roles at Academia Sinica and National Yunlin University of Science and Technology. He has made significant contributions to the academic community as an Associate Editor for several journals including IEEE Transactions on Multimedia and has served on organizing committees for international conferences such as IEEE ICCE-TW and APSIPA ASC.</p>
          
          <p>Dr. Kang's work has been recognized with multiple awards, including the Top 10% Paper Award at IEEE MMSP 2013, the Best Performance Award in the Social Media Prediction Challenge at ACM Multimedia 2019, and the Best Paper Award at APSIPA ASC 2020. He has published extensively in prestigious journals and conferences, with over 100 research papers to his credit.</p>
        </div>
        
        <h3 class="section-title">Research Interests</h3>
            <div class="interests-tags" style="margin-top: 1rem;">
            <span class="interest-tag">Computer Vision</span>
            <span class="interest-tag">Image Processing</span>
            <span class="interest-tag">Multimedia Analysis</span>
            <span class="interest-tag">Artificial Intelligence</span>
            <span class="interest-tag">Deep Learning</span>
            <span class="interest-tag">Pattern Recognition</span>
            </div>
        
        <h3 class="section-title">Education</h3>
        <div class="education-list">
            <div class="education-item" style="margin-top: 1rem;">
            <div class="education-degree">Ph.D. in Computer Science</div>
            <div class="education-university">National Chung Cheng University</div>
            <div class="education-year">2005</div>
            </div>
            <div class="education-item">
            <div class="education-degree">M.S. in Computer Science</div>
            <div class="education-university">National Chung Cheng University</div>
            <div class="education-year">1999</div>
            </div>
            <div class="education-item">
            <div class="education-degree">B.S. in Computer Science</div>
            <div class="education-university">National Chung Cheng University</div>
            <div class="education-year">1997</div>
            </div>
        </div>

         <h3 class="section-title">Selected Awards & Honors</h3>
            <div class="awards-list" style="margin-top: 1rem;">
              <div class="award-item" style="margin-bottom: 1.5rem;">
                <div class="award-icon"><i class="fas fa-trophy"></i></div>
                <div class="award-content">
                  <div class="award-name">World's Top 2% Scientist</div>
                  <div class="award-org">Stanford University</div>
                  <div class="award-year">2024, 2022</div>
                </div>
              </div>
              <div class="award-item" style="margin-bottom: 1.5rem;">
                <div class="award-icon"><i class="fas fa-award"></i></div>
                <div class="award-content">
                  <div class="award-name">Best Presentation Award</div>
                  <div class="award-org">IEEE GCCE</div>
                  <div class="award-year">2024</div>
                </div>
              </div>
              <div class="award-item" style="margin-bottom: 1.5rem;">
                <div class="award-icon"><i class="fas fa-medal"></i></div>
                <div class="award-content">
                  <div class="award-name">Best Paper Award</div>
                  <div class="award-org">APSIPA ASC</div>
                  <div class="award-year">2020</div>
                </div>
              </div>
              <div class="award-item" style="margin-bottom: 1.5rem;">
                <div class="award-icon"><i class="fas fa-certificate"></i></div>
                <div class="award-content">
                  <div class="award-name">Best Performance Award – SMP Challenge</div>
                  <div class="award-org">ACM Multimedia</div>
                  <div class="award-year">2019</div>
                </div>
              </div>
              <div class="award-item" style="margin-bottom: 1.5rem;">
                <div class="award-icon"><i class="fas fa-ribbon"></i></div>
                <div class="award-content">
                  <div class="award-name">IEEE Service Awards</div>
                  <div class="award-org">IEEE ICCE-TW</div>
                  <div class="award-year">2015-2018</div>
                </div>
              </div>
              <div class="award-item">
                <div class="award-icon"><i class="fas fa-star"></i></div>
                <div class="award-content">
                  <div class="award-name">Top 10% Paper Award</div>
                  <div class="award-org">IEEE MMSP</div>
                  <div class="award-year">2013</div>
                </div>
              </div>
            </div>

         <h3 class="section-title">Professional Service</h3>
          <div class="service-list" style="margin-top: 1rem; margin-bottom: 2rem;">
            <h4 style="color: #105E96; font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Editorial Roles</h4>
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
              <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-pen-fancy" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Guest Editor, Sensors, 2024</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-pen-fancy" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Guest Editor, APSIPA Transactions on Signal and Information Processing, 2019~2022</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-pen-fancy" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Associate Editor, International Journal of Distributed Sensor Networks, 2013~2015</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-pen-fancy" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Guest Editor, International Journal of Electrical Engineering, 2014</li>
              </ul>
            </div>
            
            <h4 style="color: #105E96; font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Committee Leadership</h4>
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
              <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-users" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Chair, Image, Video, and Multimedia Technical Committee, APSIPA, 2025~Now</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-users" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Vice Chair, Image, Video, and Multimedia Technical Committee, APSIPA, 2023~2024</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-users" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Secretary, Image, Video, and Multimedia Technical Committee, APSIPA, 2022~2023</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-users" style="color: #17A589; margin-right: 15px; width: 20px;"></i> TC Member, Signal Processing Systems: Design and Implementation Technical Committee, APSIPA, 2017~2020</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-users" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Multimedia Systems and Applications Technical Committee, IEEE Circuits and Systems Society, 2020~2024</li>
              </ul>
            </div>
            
            <h4 style="color: #105E96; font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Professional Society Roles</h4>
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Director, Chinese Image Processing and Pattern Recognition Society, Taiwan, since 2024</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Supervisor, Chinese Image Processing and Pattern Recognition Society, Taiwan, 2020~2024</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Director, APSIPA Taiwan Chapter, since 2022</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Secretary, Chinese Image Processing and Pattern Recognition Society, Taiwan, 2018~2020</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Secretary, IEEE Signal Processing Society Tainan Chapter, 2017~2018</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Founding member, Taiwan ACM SIGMM Chapter, 2014</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-user-tie" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Founding member, ACM ICPC Contest Council for Taiwan, 2014</li>
            </ul>    </div>
            
            <h4 style="color: #105E96; font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Conference Organization</h4>
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
              <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-calendar-alt" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Organizing Co-Chair, ACM International Conference on Multimedia Retrieval, 2019</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-calendar-alt" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Organizing Co-Chair, Ph.D. Forum, APSIPA ASC, 2018</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-calendar-alt" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Organizing Co-Chair, APSIPA ASC, 2013</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-calendar-alt" style="color: #17A589; margin-right: 15px; width: 20px;"></i> TPC Member/Reviewer/Special Session Organizer/Area Chair for multiple international conferences (APSIPA ASC, ICIP, ISCAS, ICASSP, ICME, MMSP, CVPR, ICCV, ACM MM, ICMR, AAAI, and others)</li>
                <li style="margin-bottom: 0.7rem; display: flex;"><i class="fas fa-calendar-alt" style="color: #17A589; margin-right: 15px; width: 20px;"></i> Reviewer for prestigious international journals (IEEE TIP, TMM, TCSVT, TSP, TNNLS, TIFS, IJCV, ACM TOMM, and others)</li>
              </ul>
            </div>
          </div>        
        <h3 class="section-title">Current Teaching</h3>
            <div class="teaching-list" style="margin-top: 1rem;">
              <div class="teaching-item" style="margin-bottom: 1.5rem;">
                <div class="teaching-course"><i class="fas fa-book"></i> Computer Programing</div>
              </div>
              
              <div class="teaching-item" style="margin-bottom: 1.5rem;">
                <div class="teaching-course"><i class="fas fa-code"></i> Object-Oriented Programming</div>
              </div>
              
              <div class="teaching-item">
                <div class="teaching-course"><i class="fas fa-brain"></i> Deep Learning</div>
            </div>
        <h3 class="section-title">Contact</h3>
            <div class="contact-links">
              <a href="mailto:lwkang@ntnu.edu.tw" class="contact-link">
                <i class="fas fa-envelope"></i> Email
              </a>
              <a href="https://scholar.google.com/citations?user=QwSzhgEAAAAJ&hl=zh-TW" target="_blank" class="contact-link">
                <i class="fas fa-graduation-cap"></i> Google Scholar
              </a>
              <a href="https://iipp.tw/mentor/638?utm_source" target="_blank" class="contact-link">
                <i class="fas fa-globe"></i> Personal Website
              </a>
            </div>
          </div>
        </div>
  </div>
</div>