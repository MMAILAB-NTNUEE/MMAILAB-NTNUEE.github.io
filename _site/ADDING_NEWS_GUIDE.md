# Adding News to the MAILAB Website

This guide explains how to add news items to the MAILAB website. The news system is designed to be easy to use for everyone, even those without web design experience.

## Adding a New News Item

1. **Create a new markdown file** in the `_news` folder
   - Name the file using the format: `YYYY-MM-DD-title-with-hyphens.md`
   - Example: `2025-04-15-new-research-grant.md`

2. **Add the front matter** at the top of the file (between two sets of triple dashes `---`)
   ```yaml
   ---
   title: "Your News Title Here"
   date: YYYY-MM-DD
   categories:
     - Research  # Choose one primary category
   tags:
     - deep-learning
     - computer-vision
     - publications
     - awards
   featured_image: /assets/images/your-image.jpg  # Optional
   image_caption: "Caption for the image"  # Optional
   excerpt: "A brief summary of the news item that will appear in cards and previews"
   header:
     teaser: /assets/images/your-image.jpg  # Image for card previews
   ---
   ```

3. **Write your content** in markdown format below the front matter
   ```markdown
   Your news content goes here. You can use **bold**, *italic*, and other markdown formatting.

   ## Subheadings are easy

   - Use bullet points
   - For lists of items

   1. Or numbered lists
   2. If you prefer

   [Link text](https://example.com)

   ![Image description](/assets/images/some-image.jpg)
   ```

4. **Save the file** and commit it to the repository

## Front Matter Fields Explained

| Field | Description | Required? |
|-------|-------------|-----------|
| `title` | The title of the news item | Yes |
| `date` | Publication date (YYYY-MM-DD) | Yes |
| `categories` | Primary category (Research, Awards, Events, Press) | Yes |
| `tags` | Related topics for filtering (use lowercase with hyphens) | No |
| `featured_image` | Large image shown at the top of the article | No |
| `image_caption` | Caption for the featured image | No |
| `excerpt` | Brief summary (appears in cards and previews) | Yes |
| `header.teaser` | Small image shown on news cards | No |

## Available Categories

- Research
- Publications
- Awards
- Events
- Press
- Funding
- Collaborations

## Common Tags

- computer-vision
- machine-learning
- deep-learning
- awards
- publications
- grants
- collaborations
- conferences
- workshops
- students

## Adding Images

1. Place images in the `/assets/images/news/` folder
2. Reference them with the path `/assets/images/news/your-image.jpg`

## Example

```markdown
---
title: "New Research Grant Awarded"
date: 2025-04-15
categories:
  - Funding
tags:
  - grants
  - computer-vision
  - research
featured_image: /assets/images/news/grant-announcement.jpg
image_caption: "Team members at the grant announcement ceremony"
excerpt: "Our lab has been awarded a major research grant to advance work on computer vision algorithms for autonomous systems."
header:
  teaser: /assets/images/news/grant-announcement-small.jpg
---

We're excited to announce that our lab has been awarded a major research grant from the National Science Foundation to support our work on computer vision algorithms for autonomous systems.

## Project Overview

The $500,000 grant will fund our research on developing more efficient and accurate computer vision algorithms for real-time object detection and tracking in autonomous vehicles.

## Research Impact

This funding will support:

- Two PhD students for the next three years
- New GPU computing infrastructure
- Collaboration with industry partners

## Next Steps

We're currently recruiting talented graduate students interested in computer vision and deep learning to join this project. [Learn more about opportunities here](/join/).
```

## Need Help?

If you have questions about adding news items, please contact the website maintainer.