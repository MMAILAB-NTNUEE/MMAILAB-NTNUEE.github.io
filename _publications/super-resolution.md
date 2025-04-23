---
title: "Image Super Resolution"
layout: splash
permalink: /publications/super-resolution/

header:
    overlay_image: /assets/images/research-vision.jpg
    overlay_filter: 0.4
    show_overlay_excerpt: false
---

# AnimeTransGAN: Animation Image Super-Resolution Transformer via Deep Generative Adversarial Network

## Introduction

Classic animation content often lacks the resolution and visual detail needed for modern high-definition displays, such as UHDTV. Existing super-resolution (SR) methods struggle with animation-specific challenges—GAN-based models may miss fine details, while transformer-based models can introduce visual artifacts.

>This work addresses the task of **animation image super-resolution** by proposing a novel deep learning framework, **AnimeTransGAN**, which combines the strengths of both GANs and transformers. The goal is to generate high-quality, visually appealing high-resolution animation images that preserve artistic style and fine details.

## Research Purpose

To overcome the limitations of current methodologies—where **GAN-based models** often fail to recover fine image details and **transformer-based models** may introduce artifacts such as over-blurring or over-sharpening—this work proposes **AnimeTransGAN**, a novel deep learning architecture that:

- Utilizes the **superior detail restoration capabilities of transformer networks**.
- Employs a **U-Net-based discriminator** to improve the realism and perceptual quality of the generated images through adversarial training.

## Proposed Architecture
<div style="text-align: center">
    <img src="/assets/images/publication/AnimeTransGAN/Arch.png" alt="Architecture">
</div>

## Performance Evaluation
<div style="text-align: center">
    <img src="/assets/images/publication/AnimeTransGAN/evaluation.png" alt="Evaluation">
</div>

## SR Result Comparision
<div style="text-align: center">
    <img src="/assets/images/publication/AnimeTransGAN/result_compare.png" alt="Result Comparision">
</div>

## Paper Link

<div class="publication-button">
    <a href="https://ieeexplore.ieee.org/document/10315278" class="btn btn--primary btn--large">View Paper</a>
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
