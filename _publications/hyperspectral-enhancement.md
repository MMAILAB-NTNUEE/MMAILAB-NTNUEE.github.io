---
title: "Hyperspectral Image Enhancement"
layout: splash
permalink: /publications/hyperspectral-enhancement/

header:
    overlay_image: /assets/images/research-vision.jpg
    overlay_filter: 0.4
    show_overlay_excerpt: false
---

# Robust Hyperspectral Image Panshapring via Sparse Spatial-Spectral Representation

> This task aims to generate reconstructed high-resolution hyperspectral images (HR-HSI) by fusing low-resolution hyperspectral data with high-resolution multispectral images, enhancing both spatial and spectral details for better remote sensing analysis.


## Enhancing Hyperspectral Imaging with S3RNet

High-resolution hyperspectral images are vital for accurate analysis in remote sensing, environmental monitoring, and precision agriculture. However, due to hardware limitations, capturing such detailed data is challenging.

**S3RNet** offers a powerful solution by intelligently fusing:
- **Low-resolution hyperspectral images (LRHSI)** – rich in spectral detail  
- **High-resolution multispectral images (HRMSI)** – rich in spatial detail  

Through a deep learning framework, S3RNet enhances both spatial and spectral quality to generate high-resolution hyperspectral images.

### Key Features of S3RNet:
- **Multi-Branch Fusion Network (MBFN):** Extracts complementary features from different spatial and spectral scales  
- **Spatial-Spectral Attention (SSAWB):** Focuses on informative features while reducing noise  
- **Dense Feature Aggregation (DFAB):** Efficiently combines features for better reconstruction

## S3RNet Architecture

![S3RNet Architecture](/assets/images/publication/S3RNet/S3RNet.png)

> The figure above illustrates the S3RNet framework, Multi-Branch Fusion Network (MBFN) for extracting multi-scale
spatial-spectral features in Q-K-V-Z branch, Spatial-Spectral Attention Weight Block (SSAWB) for adaptive feature refinement and improving robustness
against noise interference with sparse feature representation, and Dense Feature Aggregation Block (DFAB) for efficient feature integration.

## Performance Evaluation and Complexity Comparison
![S3Net Evaluation](/assets/images/publication/S3RNet/S3RNet_evaluation.png)

> S3RNet delivers state-of-the-art performance, especially under noisy conditions, making it a reliable tool for high-quality hyperspectral image reconstruction.

## Paper Link

<div class="publication-button">
    <a href="https://arxiv.org/pdf/2501.07953" class="btn btn--primary btn--large">View Paper</a>
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

