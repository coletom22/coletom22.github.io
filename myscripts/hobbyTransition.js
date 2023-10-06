document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", handleScroll);
  });
  
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      if (isElementHalfwayInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  function isElementHalfwayInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Calculate the midpoint of the element
    const elementMidpoint = rect.top + rect.height / 2;
  
    // Check if the midpoint is within the viewport
    return elementMidpoint >= 0 && elementMidpoint <= windowHeight;
  }
  