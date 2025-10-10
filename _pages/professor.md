---
title: "About the Professor"
layout: fullwidth
permalink: /professor/
classes: wide
header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.5
---

<!-- External CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/homepage.css">

<style>
  /* Full Width Professor Page Styles */
  .fullwidth-wrapper {
    width: 100%;
    max-width: 100%;
  }

  /* Same background style as index page */
  .professor-page {
    width: 100%;
    margin: 0;
    padding: 2rem 3rem;
    box-sizing: border-box;
    background: var(--jp-white);
    position: relative;
  }

  .professor-container {
    width: 100%;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  .professor-profile {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
    background: var(--jp-bg-secondary);
    border-radius: var(--jp-border-radius);
    padding: 2rem;
    box-shadow: var(--jp-shadow-soft);
    border: 1px solid var(--jp-gray-light);
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .professor-profile:last-child {
    border-bottom: none;
  }

  .professor-image {
    flex: 0 0 450px;
  }

  .professor-image img {
    width: 100%;
    border-radius: var(--jp-border-radius);
    box-shadow: var(--jp-shadow-medium);
  }

  .professor-details {
    flex: 1;
    min-width: 300px;
  }

  .professor-name {
    font-family: var(--jp-font-sans);
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--jp-primary);
    margin: 0 0 var(--jp-spacing-xs);
  }

  .professor-title {
    font-family: var(--jp-font-sans);
    font-size: 1.2rem;
    color: var(--jp-accent);
    font-weight: 600;
    margin-bottom: var(--jp-spacing-lg);
  }

  .professor-bio {
    margin-bottom: var(--jp-spacing-lg);
    line-height: 1.9;
    color: var(--jp-gray-dark);
    font-size: 1.1rem;
    font-family: var(--jp-font-sans);
  }

  .section-title {
    font-family: var(--jp-font-sans);
    font-size: 1.4rem;
    color: var(--jp-primary);
    margin: 1.5rem 0 1rem;
    font-weight: 600;
  }

  .subsection-title {
    font-family: var(--jp-font-sans);
    font-size: 1.1rem;
    color: var(--jp-accent);
    margin: 1rem 0 0.5rem -1rem;
    font-weight: 600;
    padding-left: 1rem;
    border-left: 3px solid var(--jp-accent);
    position: relative;
  }


  .interests-tags {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .interest-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    min-height: 120px;
    border-radius: 16px;
    background: linear-gradient(135deg, var(--jp-bg-secondary), var(--jp-white));
    color: var(--jp-primary);
    font-size: 1.05rem;
    font-weight: 600;
    font-family: var(--jp-font-sans);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid var(--jp-gray-light);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
  }

  .interest-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(23, 165, 137, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .interest-tag::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--jp-accent), var(--jp-primary));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .interest-tag:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    color: var(--jp-accent);
    border-color: var(--jp-accent);
    background: var(--jp-white);
  }

  .interest-tag:hover::before {
    opacity: 1;
  }

  .interest-tag:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 1024px) {
    .interests-tags {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }

  @media (max-width: 640px) {
    .interests-tags {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  .education-item {
    margin-bottom: 1rem;
    padding: 1.25rem;
    background: var(--jp-white);
    border-radius: 10px;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    position: relative;
    padding-left: 2rem;
  }

  .education-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 70%;
    background: linear-gradient(180deg, var(--jp-accent), var(--jp-primary));
    border-radius: 0 2px 2px 0;
  }

  .education-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .education-degree {
    font-weight: 600;
    color: var(--jp-black);
    font-family: var(--jp-font-sans);
  }

  .education-university {
    color: var(--jp-accent);
    font-family: var(--jp-font-sans);
  }

  .education-year {
    color: var(--jp-gray-dark);
    font-size: 0.9rem;
    font-family: var(--jp-font-sans);
  }

  .professor-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.2rem;
    margin: 1.5rem 0;
  }

  .stat-item {
    text-align: center;
    padding: 2rem 1rem;
    background: var(--jp-white);
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, var(--jp-accent), var(--jp-primary));
    border-radius: 0 0 4px 4px;
  }

  .stat-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, transparent 60%, rgba(23, 165, 137, 0.03));
    z-index: 0;
  }

  .stat-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }

  .stat-number {
    font-size: 2.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--jp-primary), var(--jp-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    font-family: var(--jp-font-sans);
    position: relative;
    z-index: 1;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--jp-gray-dark);
    font-family: var(--jp-font-sans);
    font-weight: 500;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 1;
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--jp-spacing-md);
    margin-top: var(--jp-spacing-lg);
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    padding: var(--jp-spacing-sm) var(--jp-spacing-lg);
    border-radius: var(--jp-border-radius-large);
    background: rgba(var(--jp-primary-rgb), 0.1);
    color: var(--jp-primary);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--jp-font-sans);
    transition: var(--jp-transition);
    border: 1px solid transparent;
  }

  .contact-link:hover {
    background: var(--jp-primary);
    color: var(--jp-bg-secondary);
    transform: translateY(-3px);
    box-shadow: var(--jp-shadow-medium);
    border-color: var(--jp-primary);
  }

  .contact-link i {
    margin-right: var(--jp-spacing-sm);
    font-size: 1.2rem;
  }

  .awards-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: var(--jp-spacing-lg);
  }

  .award-item {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    background: var(--jp-bg-secondary);
    border-radius: var(--jp-border-radius);
    border-left: 4px solid var(--jp-accent);
    transition: var(--jp-transition);
    height: 100%;
  }

  .award-item:hover {
    transform: translateY(-3px);
    box-shadow: var(--jp-shadow-medium);
  }

  @media (max-width: 768px) {
    .awards-list {
      grid-template-columns: 1fr;
    }
  }

  .award-icon {
    color: var(--jp-accent);
    margin-right: var(--jp-spacing-md);
    font-size: 1.1rem;
    margin-top: 0.2rem;
  }

  .award-content {
    flex: 1;
  }

  .award-name {
    font-weight: 600;
    color: var(--jp-black);
    font-family: var(--jp-font-sans);
  }

  .award-org {
    color: var(--jp-gray-dark);
    font-size: 0.9rem;
    font-family: var(--jp-font-sans);
  }

  .award-year {
    color: var(--jp-accent);
    font-weight: 500;
    font-family: var(--jp-font-sans);
  }

  .publications-highlight {
    margin-bottom: var(--jp-spacing-lg);
  }

  .publication-item {
    margin-bottom: var(--jp-spacing-lg);
    padding: var(--jp-spacing-md);
    background: var(--jp-bg-secondary);
    border-radius: var(--jp-border-radius);
    border-left: 4px solid var(--jp-accent);
    position: relative;
    transition: var(--jp-transition);
  }

  .publication-item:hover {
    transform: translateX(4px);
    box-shadow: var(--jp-shadow-soft);
  }

  .publication-title {
    font-weight: 600;
    color: var(--jp-black);
    font-size: 1.05rem;
    margin-bottom: var(--jp-spacing-xs);
    font-family: var(--jp-font-sans);
  }

  .publication-authors {
    color: var(--jp-gray-medium);
    font-size: 0.9rem;
    margin-bottom: var(--jp-spacing-xs);
    font-family: var(--jp-font-sans);
  }

  .publication-venue {
    color: var(--jp-accent);
    font-weight: 500;
    font-size: 0.9rem;
    font-family: var(--jp-font-sans);
  }

  .publication-year {
    color: var(--jp-gray-medium);
    font-size: 0.9rem;
    font-family: var(--jp-font-sans);
  }

  .teaching-list {
    margin-bottom: var(--jp-spacing-lg);
  }

  .teaching-item {
    margin-bottom: var(--jp-spacing-md);
    padding: var(--jp-spacing-md);
    background: var(--jp-bg-secondary);
    border-radius: var(--jp-border-radius);
    border-left: 4px solid var(--jp-accent);
    transition: var(--jp-transition);
  }

  .teaching-item:hover {
    transform: translateX(4px);
    box-shadow: var(--jp-shadow-soft);
  }

  .teaching-course {
    font-weight: 600;
    color: var(--jp-black);
    font-family: var(--jp-font-sans);
    display: flex;
    align-items: center;
  }

  .teaching-course i {
    color: var(--jp-accent);
    margin-right: var(--jp-spacing-md);
    width: 25px;
    text-align: center;
    flex-shrink: 0;
  }

  .teaching-code {
    color: var(--jp-accent);
    font-weight: 500;
    font-family: var(--jp-font-sans);
  }

  .teaching-sem {
    color: var(--jp-gray-medium);
    font-size: 0.9rem;
    font-family: var(--jp-font-sans);
  }

  .all-publications-link {
    display: inline-flex;
    align-items: center;
    margin-top: var(--jp-spacing-md);
    color: var(--jp-primary);
    font-weight: 500;
    text-decoration: none;
    font-family: var(--jp-font-sans);
    transition: var(--jp-transition);
    padding: var(--jp-spacing-sm) var(--jp-spacing-md);
    border-radius: var(--jp-border-radius);
    background: rgba(var(--jp-primary-rgb), 0.1);
  }

  .all-publications-link:hover {
    color: var(--jp-white);
    background: var(--jp-primary);
    transform: translateY(-2px);
    box-shadow: var(--jp-shadow-soft);
  }

  .all-publications-link i {
    margin-left: var(--jp-spacing-sm);
  }

  .service-list {
    background: var(--jp-bg-secondary);
    padding: 1.5rem;
    border-radius: var(--jp-border-radius);
    margin-bottom: 1.2rem;
    border: 1px solid var(--jp-gray-light);
    box-shadow: var(--jp-shadow-soft);
    position: relative;
  }

  .service-items {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .service-item {
    margin-bottom: var(--jp-spacing-sm);
    display: flex;
    align-items: flex-start;
    font-family: var(--jp-font-sans);
    color: var(--jp-gray-dark);
    line-height: 1.6;
  }

  .service-item:last-child {
    margin-bottom: 0;
  }

  .service-item i {
    color: var(--jp-accent);
    margin-right: var(--jp-spacing-md);
    width: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* Large screens - use more width */
  @media (min-width: 1920px) {
    .professor-page {
      padding: 0 5rem;
    }

    .professor-image {
      flex: 0 0 500px;
    }
  }

  @media (min-width: 2560px) {
    .professor-page {
      padding: 0 8rem;
    }

    .professor-image {
      flex: 0 0 600px;
    }
  }

  @media (max-width: 768px) {
    .professor-profile {
      flex-direction: column;
      gap: var(--jp-spacing-lg);
      padding: var(--jp-spacing-lg);
    }

    .professor-image {
      flex: 0 0 100%;
      max-width: 350px;
      margin: 0 auto;
    }

    .professor-stats {
      flex-direction: column;
      gap: var(--jp-spacing-md);
    }

    .stat-item {
      min-width: 100%;
    }

    .contact-links {
      justify-content: center;
    }

    .interests-tags {
      justify-content: center;
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

          <p>Throughout his career, Dr. Kang has held several academic positions, including roles at Academia Sinica and National Yunlin University of Science and Technology. </p>

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
              <div class="award-year">2025, 2024, 2022</div>
              <a href="https://pr.ntnu.edu.tw/ntnunews/index.php?mode=data&id=23857" target="_blank">[2025 World's Top 2% Scientists]</a>
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
        <div style="margin-top: 1rem; margin-bottom: 2rem; padding-left: 2rem;">
          <h4 class="subsection-title">Editorial Roles</h4>
          <div class="service-list">
            <ul class="service-items">
              <li class="service-item"><i class="fas fa-pen-fancy"></i> Associate Editor, International Journal of Pattern Recognition and Artificial Intelligence, Jan. 2025~Now</li>
              <li class="service-item"><i class="fas fa-pen-fancy"></i> Guest Editor, Sensors, 2024</li>
              <li class="service-item"><i class="fas fa-pen-fancy"></i> Guest Editor, APSIPA Transactions on Signal and Information Processing, 2019~2022</li>
              <li class="service-item"><i class="fas fa-pen-fancy"></i> Associate Editor, International Journal of Distributed Sensor Networks, 2013~2015</li>
              <li class="service-item"><i class="fas fa-pen-fancy"></i> Guest Editor, International Journal of Electrical Engineering, 2014</li>
            </ul>
          </div>

          <h4 class="subsection-title">Committee Leadership</h4>
          <div class="service-list">
            <ul class="service-items">
              <li class="service-item"><i class="fas fa-users"></i> Chair, Image, Video, and Multimedia Technical Committee, APSIPA, 2025~Now</li>
              <li class="service-item"><i class="fas fa-users"></i> Vice Chair, Image, Video, and Multimedia Technical Committee, APSIPA, 2023~2024</li>
              <li class="service-item"><i class="fas fa-users"></i> Secretary, Image, Video, and Multimedia Technical Committee, APSIPA, 2022~2023</li>
              <li class="service-item"><i class="fas fa-users"></i> TC Member, Signal Processing Systems: Design and Implementation Technical Committee, APSIPA, 2017~2020</li>
              <li class="service-item"><i class="fas fa-users"></i> Multimedia Systems and Applications Technical Committee, IEEE Circuits and Systems Society, 2020~2024</li>
            </ul>
          </div>

          <h4 class="subsection-title">Professional Society Roles</h4>
          <div class="service-list">
            <ul class="service-items">
              <li class="service-item"><i class="fas fa-user-tie"></i> Director, Chinese Image Processing and Pattern Recognition Society, Taiwan, since 2024</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Supervisor, Chinese Image Processing and Pattern Recognition Society, Taiwan, 2020~2024</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Director, APSIPA Taiwan Chapter, since 2022</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Secretary, Chinese Image Processing and Pattern Recognition Society, Taiwan, 2018~2020</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Secretary, IEEE Signal Processing Society Tainan Chapter, 2017~2018</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Founding member, Taiwan ACM SIGMM Chapter, 2014</li>
              <li class="service-item"><i class="fas fa-user-tie"></i> Founding member, ACM ICPC Contest Council for Taiwan, 2014</li>
            </ul>
          </div>

          <h4 class="subsection-title">Conference Organization</h4>
          <div class="service-list">
            <ul class="service-items">
              <li class="service-item"><i class="fas fa-calendar-alt"></i> Organizing Co-Chair, ACM International Conference on Multimedia Retrieval, 2019</li>
              <li class="service-item"><i class="fas fa-calendar-alt"></i> Organizing Co-Chair, Ph.D. Forum, APSIPA ASC, 2018</li>
              <li class="service-item"><i class="fas fa-calendar-alt"></i> Organizing Co-Chair, APSIPA ASC, 2013</li>
              <li class="service-item"><i class="fas fa-calendar-alt"></i> TPC Member/Reviewer/Special Session Organizer/Area Chair for multiple international conferences (APSIPA ASC, ICIP, ISCAS, ICASSP, ICME, MMSP, CVPR, ICCV, ACM MM, ICMR, AAAI, and others)</li>
              <li class="service-item"><i class="fas fa-calendar-alt"></i> Reviewer for prestigious international journals (IEEE TIP, TMM, TCSVT, TSP, TNNLS, TIFS, IJCV, ACM TOMM, and others)</li>
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
