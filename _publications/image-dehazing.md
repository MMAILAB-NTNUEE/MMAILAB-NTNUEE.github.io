---
title: "Image Dehazing"
layout: splash
permalink: /publications/image-dehazing/

header:
  overlay_image: /assets/images/research-vision.jpg
  overlay_filter: 0.4
  show_overlay_excerpt: false
---

# Multi-Scale Deep Residual Learning-Based Single Image Haze Removal via Image Decomposition

> Haze in images captured under adverse weather conditions can significantly degrade visual quality and negatively impact performance in outdoor visual surveillance and other applications. This paper proposes a novel framework called **MSRL-DehazeNet (Multi-Scale Residual Learning Dehazing Network)** for single image haze removal. Our approach reformulates the problem as restoration of the image base component through image decomposition, rather than using end-to-end mapping between hazy and haze-free images.

## Research Focus
- A **image decomposition strategy** separating hazy images into base and detail components
- Three specialized components:
    - **Multi-scale deep residual learning** for haze-free base component restoration
    - **Simplified U-Net structure** to avoid color distortion in recovered images
components
    - **CNN-based detail enhancement** 

## Proposed Architecture
![Derain Architecture](/assets/images/publication/dehazing/all_arch.png)

## MSRL-DehazeNet
### Architecture
<div align="center">
    <img src="/assets/images/publication/dehazing/MSRL-DehazeNet.png" alt="MSRL-DehazeNet">
</div>

### Network Visualization
<div align="center">
    <img src="/assets/images/publication/dehazing/Network_visualization.png" alt="Network visualization">
</div>

## Factor Prediction CNN
<div align="center">
    <img src="/assets/images/publication/dehazing/factor_prediction_cnn.png" alt="factor_prediction_cnn">
</div>


## Performance Evaluation
<div align="center">
    <img src="/assets/images/publication/dehazing/evaluation.png" alt="Performance Evaluation">
</div>


## Experimental Results

> SOTS dataset
<div align="center">
    <img src="/assets/images/publication/dehazing/Result_Comparison_SOTS.png" alt="Dehaze Comparison (SOTS)">
</div>

> OTS dataset
<div align="center">
    <img src="/assets/images/publication/dehazing/Result_Comparison_OTS.png" alt="Dehaze Comparison (OTS)">
</div>

> HSTS dataset
<div align="center">
    <img src="/assets/images/publication/dehazing/Result_Comparison_HSTS.png" alt="Dehaze Comparison (HSTS)">
</div>

## Run-time Result
<div align="center">
    <img src="/assets/images/publication/dehazing/Run-Time_result.png" alt="run-time result">
</div>


## Paper Link

<div class="publication-button">
    <a href="https://ieeexplore.ieee.org/document/8931240" class="btn btn--primary btn--large">View Paper</a>
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
