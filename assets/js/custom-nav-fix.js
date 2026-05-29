/**
 * Navigation Fix Script
 * 
 * Purpose: Fixes unwanted text in navigation using MutationObserver
 * for better performance and reliability than setTimeout
 */

document.addEventListener('DOMContentLoaded', function() {
  // MutationObserver to fix navigation issues more efficiently
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
    
    // Perform initial cleaning
    cleanNavigationText();
  }
  
  /**
   * Clean unwanted text from navigation elements
   * Removes any occurrence of ';lefttwo' from text nodes
   */
  function cleanNavigationText() {
    const navNodes = document.querySelectorAll(
      '.greedy-nav, .visible-links, .masthead__menu-item, .masthead__menu'
    );
    
    navNodes.forEach(function(node) {
      if (node.childNodes) {
        node.childNodes.forEach(function(child) {
          // Check if it's a text node containing the unwanted text
          if (child.nodeType === 3 && child.textContent.includes(';lefttwo')) {
            // Remove the unwanted text
            child.textContent = child.textContent.replace(/;lefttwo/g, '');
          }
        });
      }
    });
  }
});