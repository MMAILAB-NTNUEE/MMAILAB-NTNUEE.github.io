---
title: "Our Research"
layout: fullwidth
permalink: /research/
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
      <h1 style="font-style: italic; font-weight: normal;">Research</h1>
      <p class="jp-subtitle">Our lab focuses on developing cutting-edge DL algorithms and artificial intelligence systems that solve real-world problems across multiple domains.</p>
    </div>
  </div>
</div>

<div class="jp-section">
  <div class="container">
    <div class="jp-section-header">
      <h2>Research Focus Areas</h2>
    </div>

    <div class="jp-grid-1">
      <div class="jp-card research-card-1" data-aos="fade-up">
        <div class="jp-card-header">
          <h3>Hyperspectral Image Enhancement</h3>
        </div>
        <div class="jp-card-content">
          <p>Developing advanced algorithms to enhance the quality and information content of hyperspectral imagery by fusing low-resolution hyperspectral data with high-resolution multispectral images, generating high-resolution outputs with improved spatial and spectral details for more accurate remote sensing analysis.</p>
        </div>
        <div class="jp-card-footer">
          <a href="/publications/hyperspectral-enhancement/" class="jp-btn secondary">
            <span class="jp-btn-text">View Intro</span>
            <span class="jp-btn-icon">→</span>
          </a>
        </div>
      </div>

      <div class="jp-card research-card-2" data-aos="fade-up">
        <div class="jp-card-header">
          <h3>Image Deraining</h3>
        </div>
        <div class="jp-card-content">
          <p>Creating innovative techniques for removing rain streaks and raindrops from images and videos, improving visibility and enabling better performance of computer vision systems in adverse weather conditions.</p>
        </div>
        <div class="jp-card-footer">
          <a href="/publications/image-deraining/" class="jp-btn secondary">
            <span class="jp-btn-text">View Intro</span>
            <span class="jp-btn-icon">→</span>
          </a>
        </div>
      </div>

      <div class="jp-card research-card-3" data-aos="fade-up">
        <div class="jp-card-header">
          <h3>Image Dehazing</h3>
        </div>
        <div class="jp-card-content">
          <p>Developing specialized algorithms to remove haze interference from images, restoring clarity and color fidelity while preserving structural details for improved visibility in applications ranging from photography to autonomous vehicle navigation.</p>
        </div>
        <div class="jp-card-footer">
          <a href="/publications/image-dehazing/" class="jp-btn secondary">
            <span class="jp-btn-text">View Intro</span>
            <span class="jp-btn-icon">→</span>
          </a>
        </div>
      </div>

      <div class="jp-card research-card-4" data-aos="fade-up">
        <div class="jp-card-header">
          <h3>Super Resolution</h3>
        </div>
        <div class="jp-card-content">
          <p>Developing advanced algorithms to generate high-resolution images from low-resolution inputs, recovering fine details and enhancing visual quality beyond the limitations of capture devices.</p>
        </div>
        <div class="jp-card-footer">
          <a href="/publications/super-resolution/" class="jp-btn secondary">
            <span class="jp-btn-text">View Intro</span>
            <span class="jp-btn-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 300,
    once: true,
    offset: 100
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

/* Row by row layout with more width */
.jp-grid-1 {
  display: flex;
  flex-direction: column;
  gap: var(--jp-spacing-lg);
  margin-bottom: var(--jp-spacing-xl);
  width: 100%;
  max-width: none;
}

/* Ensure consistent card heights */
.jp-card {
  display: flex;
  flex-direction: column;
  padding: var(--jp-spacing-xl);
  min-height: auto;
  width: 100%;
  max-width: none;
}

.jp-card-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--jp-black);
  margin: 0 0 var(--jp-spacing-md);
  line-height: 1.4;
}

.jp-card-content {
  flex: 1;
}

.jp-card-footer {
  margin-top: auto;
  padding-top: var(--jp-spacing-md);
}

/* Research topic color styles */
.research-card-1 .jp-card-header h3,
.research-card-2 .jp-card-header h3,
.research-card-3 .jp-card-header h3,
.research-card-4 .jp-card-header h3 {
  color: var(--jp-accent);
}
</style>

<!-- ### [Image Enhancement](/publications/image-enhancement/)

 Developing cutting-edge techniques for improving image quality, including low-light enhancement, super-resolution, denoising, and color correction to produce visually pleasing and information-rich imagery for various applications.

[View Intro](/publications/image-enhancement/){: .btn .btn--primary} -->

<!-- ## Featured Projects

*Coming Soon* -->

<!--
## Research Methodology

### Problem Identification
We identify challenging real-world problems where AI and machine learning can make a significant impact, with a focus on problems that benefit society and advance scientific knowledge.

### Algorithm Development
Our team designs innovative machine learning algorithms and architectures that address the unique challenges of each problem, often pushing the boundaries of current methodologies.

### Experimentation
We conduct rigorous experiments to validate our hypotheses and evaluate the performance of our algorithms, ensuring scientific reproducibility and reliability in our findings.

### Deployment & Impact
We strive to translate our research into practical applications that can be deployed in real-world scenarios, measuring success by the tangible impact our work has on society.
-->