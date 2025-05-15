/**
 * Navigation fix script with performance optimization
 * Fixes unwanted text in navigation without using setTimeout
 */
document.addEventListener('DOMContentLoaded', function() {
  // MutationObserver to fix navigation issues more efficiently
  // This replaces the setTimeout with a more reliable approach
  const navObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        cleanNavigationText();
      }
    });
  });
  
  // Select the navigation container
  const navContainer = document.querySelector('.masthead');
  if (navContainer) {
    // Configure and start the observer
    navObserver.observe(navContainer, {
      childList: true,
      characterData: true,
      subtree: true
    });
    
    // Do an initial cleaning
    cleanNavigationText();
  }
  
  // Function to clean unwanted text from navigation
  function cleanNavigationText() {
    const navNodes = document.querySelectorAll('.greedy-nav, .visible-links, .masthead__menu-item, .masthead__menu');
    navNodes.forEach(function(node) {
      if (node.childNodes) {
        node.childNodes.forEach(function(child) {
          // If it's a text node and contains the unwanted text
          if (child.nodeType === 3 && child.textContent.includes(';lefttwo')) {
            // Remove the unwanted text
            const newText = child.textContent.replace(/;lefttwo/g, '');
            child.textContent = newText;
          }
        });
      }
    });
  }
});