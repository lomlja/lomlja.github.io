// Function to play hover sound
function playHoverSound(event) {
      const hoverSound = event.target.closest('a').getAttribute('data-hover-sound');
      if (hoverSound) {
          const audio = new Audio(hoverSound);
          audio.play();
      }
  }
  
  // Function to play click sound and navigate after it finishes
  function handleClick(event) {
      event.preventDefault(); // Prevent immediate navigation
      const link = event.target.closest('a');
      const clickSound = link.getAttribute('data-click-sound');
      const destination = link.getAttribute('href');
  
      if (clickSound) {
          const audio = new Audio(clickSound);
          audio.play();
          // Navigate after the click sound finishes
          audio.addEventListener('ended', () => {
              window.location.href = destination;
          });
      } else {
          // Fallback navigation
          window.location.href = destination;
      }
  }
  
  // Attach event listeners
  document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('mouseover', playHoverSound); // Hover event
      button.addEventListener('click', handleClick);        // Click event
  });
  