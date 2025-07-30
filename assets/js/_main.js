/**
 * Main JavaScript file for MMAILAB website
 * Handles animations, scroll effects, and interactive features
 */

// Navbar scroll effect
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('.masthead').addClass('scrolled');
  } else {
    $('.masthead').removeClass('scrolled');
  }
});

// Smooth reveal animation for elements
const revealElements = document.querySelectorAll('.feature-card, .team-card, .news-card');
const revealOnScroll = function() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.85) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize reveal elements
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Add scroll listener
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Parallax effect for hero section
const heroBackground = document.querySelector('.hero-background');
window.addEventListener('scroll', () => {
  if (heroBackground) {
    const scrolled = window.pageYOffset;
    heroBackground.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
  }
});

// Initialize Filter System
function initializeFilters() {
  const filterTags = document.querySelectorAll('.news-filter-tag, .publications-filter .filter-item');
  filterTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active class from all tags
      filterTags.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tag
      tag.classList.add('active');
      
      // Get filter value
      const filter = tag.getAttribute('href').split('=')[1];
      filterItems(filter);
    });
  });
}

// Filter Items based on tag
function filterItems(filter) {
  const items = document.querySelectorAll('.news-card, .publication-item');
  items.forEach(item => {
    if (filter === 'all' || item.dataset.tags.includes(filter)) {
      item.style.display = 'block';
      // Add fade-in animation
      item.classList.add('animate-fade-in-up');
    } else {
      item.style.display = 'none';
    }
  });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Research Area Hover Effects
const researchCards = document.querySelectorAll('.research-theme-card');
researchCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.research-theme-icon').style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.research-theme-icon').style.transform = 'scale(1)';
  });
});

// Publication Citation Copy
function addCopyButtons() {
  const publications = document.querySelectorAll('.publication-item');
  publications.forEach(pub => {
    const copyBtn = document.createElement('button');
    copyBtn.classList.add('copy-citation');
    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Citation';
    copyBtn.addEventListener('click', () => {
      const citation = pub.querySelector('.pub-citation').textContent;
      navigator.clipboard.writeText(citation).then(() => {
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Citation';
        }, 2000);
      });
    });
    pub.querySelector('.pub-links').appendChild(copyBtn);
  });
}

// Team Member Card Interaction
function initializeTeamCards() {
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    const socialLinks = card.querySelector('.social-links');
    if (socialLinks) {
      card.addEventListener('mouseenter', () => {
        socialLinks.style.opacity = '1';
        socialLinks.style.transform = 'translateY(0)';
      });
      card.addEventListener('mouseleave', () => {
        socialLinks.style.opacity = '0';
        socialLinks.style.transform = 'translateY(10px)';
      });
    }
  });
}

// Statistics Counter Animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const step = target / 100;
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    element.textContent = Math.round(current);
    
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, duration / 100);
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
  const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  
  focusableElements.forEach(element => {
    // Add visual focus indicator
    element.addEventListener('focus', () => {
      element.classList.add('keyboard-focus');
    });
    
    element.addEventListener('blur', () => {
      element.classList.remove('keyboard-focus');
    });
    
    // Remove focus ring when using mouse
    element.addEventListener('mousedown', () => {
      element.classList.remove('keyboard-focus');
    });
  });
  
  // Skip to main content
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('main, [role="main"], .initial-content');
      if (mainContent) {
        mainContent.tabIndex = -1;
        mainContent.focus();
      }
    });
  }
}

// Enhanced Accessibility
function enhanceAccessibility() {
  // Add ARIA labels to navigation
  const nav = document.querySelector('.greedy-nav');
  if (nav) {
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');
  }
  
  // Add ARIA labels to search
  const searchForm = document.querySelector('.search-content form');
  if (searchForm) {
    searchForm.setAttribute('role', 'search');
    const searchInput = searchForm.querySelector('input[type="search"]');
    if (searchInput) {
      searchInput.setAttribute('aria-label', 'Search website');
    }
  }
  
  // Add ARIA labels to cards
  document.querySelectorAll('.feature-card, .team-card, .publication-card').forEach(card => {
    card.setAttribute('role', 'article');
  });
  
  // Enhance image accessibility
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', ''); // Empty alt for decorative images
    }
  });
}

// Dark mode toggle
function initializeDarkMode() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.classList.add('dark-mode-toggle');
  darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  
  document.querySelector('.masthead').appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
  
  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Reading progress indicator
function initializeReadingProgress() {
  const progressBar = document.createElement('div');
  progressBar.classList.add('reading-progress');
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeFilters();
  addCopyButtons();
  initializeTeamCards();
  
  // Initialize statistics animation on scroll
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
  
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
  
  initializeKeyboardNavigation();
  enhanceAccessibility();
  initializeDarkMode();
  initializeReadingProgress();
});