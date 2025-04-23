---
title: "Image Deraining"
layout: splash
permalink: /publications/image-deraining/

header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.4
  show_overlay_excerpt: false
---

# Learning Single Image Rain Streak Removal Based on Deep Attention Mechanism

> Rain streaks in images captured under adverse weather conditions, such as rain or haze, can significantly degrade visual quality and negatively impact performance in applications like outdoor visual surveillance. This project addresses the challenge of **single-image rain streak removal (deraining)** using a deep learning approach.

## Research Focus
- **Channel Attention** to strengthen feature representation during encoding.
- A **Multi-Scale Pixel Attention Module (MSPAM)** integrated into skip connections to improve feature refinement and reconstruction.

## Proposed Architecture
![Derain Architecture](/assets/images/publication/deraining/all_arch.png)


## Multi-scale pixel attention module (MSPAM)
![MSPAM Architechture](/assets/images/publication/deraining/MSPAM_arch.png)

## Performance Evaluation
<div align="center">
    <img src="/assets/images/publication/deraining/evaluation.png" alt="Performance Evaluation">
</div>

## Derain Result Comparison
<div align="center">
    <img src="/assets/images/publication/deraining/Result_Comparison.png" alt="Derain Comparison">
</div>

## Paper Link

<div class="publication-button">
    <a href="https://ieeexplore.ieee.org/document/10317431" class="btn btn--primary btn--large">View Paper</a>
</div>

<style>
    .publication-button {
        margin: 30px 0;
        text-align: center;
    }
    .btn--primary {
        background-color: #17A589;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: bold;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.3s ease;
    }
    .btn--primary:hover {
        background-color:rgb(109, 33, 35);
        text-decoration: none;
    }
</style>