// Homepage JavaScript - Optimized and bug-fixed
document.addEventListener('DOMContentLoaded', function() {
  // Dynamic Text Rotation
  const jpDynamicTexts = [
    "Computer Vision",
    "Deep Learning",
    "Image Processing",
    "Artificial Intelligence"
  ];

  let currentIndex = 0;
  const jpTextElement = document.getElementById('jp-dynamic');

  function changeJpText() {
    if (jpTextElement) {
      jpTextElement.style.opacity = '0';

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % jpDynamicTexts.length;
        jpTextElement.textContent = jpDynamicTexts[currentIndex];
        jpTextElement.style.opacity = '1';
      }, 500);
    }
  }

  // Change text every 4 seconds
  if (jpTextElement) {
    jpTextElement.style.transition = 'opacity 0.5s ease';
    setInterval(changeJpText, 4000);
  }

  // Animated Counter - Fixed double plus bug
  const counters = document.querySelectorAll('[data-counter]');
  const speed = 200;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-counter');
    const increment = target / speed;

    const updateCounter = () => {
      const current = +counter.innerText;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target; // Fixed: removed '+' here since it's in HTML
      }
    };

    updateCounter();
  };

  // Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });

  // Sakura Petals System - Fixed memory leak
  const sakuraContainer = document.getElementById('sakura-petals');
  let petalCount = 0;
  const MAX_PETALS = 10; // Limit maximum petals

  if (sakuraContainer) {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      function createSakuraPetal() {
        // Don't create more petals if we've reached the limit
        if (petalCount >= MAX_PETALS) return;

        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.animationDuration = (15 + Math.random() * 10) + 's';

        sakuraContainer.appendChild(petal);
        petalCount++;

        // Remove petal after animation completes
        petal.addEventListener('animationend', () => {
          petal.remove();
          petalCount--;
        });
      }

      // Create initial petals
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createSakuraPetal(), i * 2000);
      }

      // Continue creating petals sparingly
      setInterval(createSakuraPetal, 5000);
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Optimized parallax for zen circles
  const zenCircles = document.querySelectorAll('.zen-circle');

  if (zenCircles.length > 0) {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      let ticking = false;

      function updateParallax() {
        const scrolled = window.pageYOffset;

        zenCircles.forEach((circle, index) => {
          const speed = index === 0 ? 0.5 : 0.3;
          circle.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
      }

      // Use requestAnimationFrame for better performance
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      });
    }
  }

  // Fallback image check for news cards
  const newsImages = document.querySelectorAll('.news-card-image img');
  const fallbackImage = '/assets/images/website-launch.png';

  newsImages.forEach(img => {
    // Add error handler for missing images
    img.addEventListener('error', function() {
      // Check if fallback image exists
      const testImg = new Image();
      testImg.onload = () => {
        this.src = fallbackImage;
      };
      testImg.onerror = () => {
        // If fallback doesn't exist, use placeholder
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23f0f0f0"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EMMAILAB%3C/text%3E%3C/svg%3E';
      };
      testImg.src = fallbackImage;
    });
  });
});