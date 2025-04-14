// Custom JavaScript to fix navigation issues
document.addEventListener('DOMContentLoaded', function() {
  // Fix for unwanted text in navigation bar
  setTimeout(function() {
    // Find and remove any text nodes that contain the unwanted text
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
  }, 100);
});