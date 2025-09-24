---
title: "Contact Us"
layout: fullwidth
permalink: /contact/
classes:
  - wide
header:
  overlay_image: /assets/images/contact-header.jpg
  overlay_filter: 0.5
---

<link rel="stylesheet" href="/assets/css/homepage.css">

<div class="jp-section">
  <div class="container">
    <div class="jp-hero-content">
      <h1 style="font-style: italic; font-weight: normal;">Get in Touch</h1>
      <p class="jp-subtitle">Connect with our research team and discover collaboration opportunities.</p>
    </div>
  </div>
</div>

<div class="jp-section">
  <div class="container">
    <div class="jp-card jp-join-card" data-aos="fade-up">
      <div class="jp-card-content" style="text-align: center;">
        <div class="jp-join-icon">
          <i class="fas fa-users" aria-hidden="true"></i>
        </div>
        <h3>Join Our Research Team</h3>
        <p>Explore exciting opportunities in AI, computer vision, and multimedia analysis. Shape the future of technology with us.</p>
        <a href="{{ site.baseurl }}/join/" class="jp-btn secondary jp-join-btn">
          <span class="jp-btn-text">Discover Opportunities</span>
          <span class="jp-btn-icon">→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="jp-contact-fullwidth">
  <div class="jp-card jp-contact-left" data-aos="fade-up">
    <div class="jp-card-header" style="text-align: center;">
      <h3><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Lab Location</h3>
    </div>
    <div class="jp-card-content" style="text-align: center;">
      <p>
        4F, Technology Building<br>
        Department of Electrical Engineering<br>
        National Taiwan Normal University<br>
        162, Section 1, Heping East Road<br>
        Taipei 10610, Taiwan
      </p>
    </div>
  </div>

  <div class="jp-card jp-contact-right" data-aos="fade-up" data-aos-delay="200">
    <div class="jp-card-header" style="text-align: center;">
      <h3><i class="fas fa-envelope" aria-hidden="true"></i> Contact Information</h3>
    </div>
    <div class="jp-card-content" style="text-align: center;">
      <p><strong>Email:</strong><br>
      <a href="mailto:lwkang@ntnu.edu.tw">lwkang@ntnu.edu.tw</a></p>

      <p><strong>Phone:</strong><br>
      (02)7749-3563</p>

      <p><strong>Office Hours:</strong><br>
      Monday - Friday: 9:00 AM - 5:00 PM</p>
    </div>
  </div>
</div>

<!-- <div class="jp-section">
  <div class="container">
    <div class="jp-card" data-aos="fade-up" data-aos-delay="400">
      <div class="jp-card-header">
        <h3>Location Map</h3>
      </div>
      <div class="jp-card-content">
        <div style="height: 450px; background-color: #f5f5f5; border-radius: 12px; overflow: hidden;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.004701045962!2d121.5258328!3d25.0262466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98a60a8fc31%3A0x7f5bcd4922e86446!2sNational%20Taiwan%20Normal%20University!5e0!3m2!1sen!2stw!4v1649578877193!5m2!1sen!2stw"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div> -->

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 100,
    once: true,
    offset: 20
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

/* Contact grid layout */
.jp-contact-fullwidth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-bottom: var(--jp-spacing-xl);
}

@media (max-width: 768px) {
  .jp-contact-fullwidth {
    grid-template-columns: 1fr;
  }
}

/* Enhanced card styling */
.jp-card {
  padding: var(--jp-spacing-lg);
  width: 100%;
}

.jp-card-header h3 {
  color: var(--jp-black);
  margin-bottom: var(--jp-spacing-md);
  display: flex;
  align-items: center;
  gap: var(--jp-spacing-sm);
}

.jp-card-header i {
  color: var(--jp-accent);
  font-size: 1.2rem;
}

.jp-card-content p {
  color: var(--jp-gray-dark);
  margin-bottom: var(--jp-spacing-sm);
  line-height: 1.6;
}

.jp-card-content a {
  color: var(--jp-accent);
  text-decoration: none;
  font-weight: 500;
}

.jp-card-content a:hover {
  text-decoration: underline;
}

/* Remove AOS delays for faster display */
[data-aos-delay] {
  animation-delay: 0ms !important;
}

/* Join card styling */
.jp-join-card {
  max-width: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(16, 94, 150, 0.05), rgba(23, 165, 137, 0.05));
  border: 1px solid rgba(16, 94, 150, 0.1);
  transition: all 0.3s ease;
}

.jp-join-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(16, 94, 150, 0.15);
  border-color: rgba(16, 94, 150, 0.2);
}

.jp-join-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--jp-accent), var(--jp-accent-light));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--jp-spacing-md);
  box-shadow: 0 4px 12px rgba(16, 94, 150, 0.2);
}

.jp-join-icon i {
  color: var(--jp-white);
  font-size: 1.5rem;
}

.jp-join-card h3 {
  color: var(--jp-black);
  margin-bottom: var(--jp-spacing-sm);
  font-size: 1.5rem;
  font-weight: 600;
}

.jp-join-card p {
  color: var(--jp-gray-dark);
  margin-bottom: var(--jp-spacing-lg);
  line-height: 1.6;
  font-size: 1.05rem;
}

.jp-join-btn {
  font-size: 1.05rem;
  padding: var(--jp-spacing-sm) var(--jp-spacing-xl);
  font-weight: 600;
}

.jp-join-btn:hover {
  transform: translateY(-2px);
}
</style>



