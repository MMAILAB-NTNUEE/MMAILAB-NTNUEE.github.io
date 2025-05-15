---
title: "Image Deraining"
layout: splash
permalink: /publications/image-deraining/

header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.4
  show_overlay_excerpt: false
---

# Sequential dual attention network for rain streak removal in a single image

> Rain streaks in images captured under adverse weather conditions, such as rain, haze, or snow, can significantly degrade visual quality and negatively impact performance in outdoor visual surveillance and other applications. This paper proposes a novel framework called **SSDRNet (Sequential dual attention-based Single image DeRaining deep Network)** for single-image rain streak removal. The approach is based on the principle that the correlation among rain streaks within an image is stronger than that between rain streaks and background pixels.

## Research Focus
- A **two-stage learning strategy** to better capture the distribution of rain streaks within a rainy image
- Three specialized components:
    - **Residual dense blocks (RDBs)** for feature extraction
    - **Sequential dual attention block (SDAB)** for focusing on rain streak patterns
    - **Multi-scale feature aggregation module (MAM)** for aggregating multi-scale feature  

## Proposed Architecture
![Derain Architecture](/assets/images/publication/deraining/all_arch.png)


## Sequential dual attention block (SDAB)
<div align="center">
    <img src="/assets/images/publication/deraining/SDAB.png" alt="SDAB block">
</div>

## Multi-scale feature aggregation module (MAM)
<div align="center">
    <img src="/assets/images/publication/deraining/MAM.png" alt="MAM module">
</div>

## Performance Evaluation
<div align="center">
    <img src="/assets/images/publication/deraining/evaluation.png" alt="Performance Evaluation">
</div>

## Experimental Results

> Rain100L dataset
<div align="center">
    <img src="/assets/images/publication/deraining/Result_Comparison_Rain100L.png" alt="Derain Comparison (Rain100L)">
</div>

> Rain100H dataset
<div align="center">
    <img src="/assets/images/publication/deraining/Result_Comparison_Rain100H.png" alt="Derain Comparison (Rain100H)">
</div>

## Paper Link

<div class="publication-button">
    <a href="https://ieeexplore.ieee.org/document/9206069" class="btn btn--primary btn--large">View Paper</a>
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