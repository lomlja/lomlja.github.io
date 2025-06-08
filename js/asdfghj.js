(function() {
  let devtoolsOpen = false;

  function detectDevTools() {
    const threshold = 100; // lowered threshold for better sensitivity

    // Size difference detection
    const sizeCheck = (window.outerWidth - window.innerWidth > threshold) || 
                      (window.outerHeight - window.innerHeight > threshold);

    // Check for debugger statement detection
    let debuggerDetected = false;
    const start = Date.now();
    debugger;
    if (Date.now() - start > 100) debuggerDetected = true;

    // Final verdict
    const isOpen = sizeCheck || debuggerDetected;

    if (isOpen && !devtoolsOpen) {
      devtoolsOpen = true;
      console.warn("🛑 DevTools detected! Redirecting...");
      window.location.href = "../inspect-detected.html"; // Change this URL
    }
  }

  // Disable right-click globally
  document.addEventListener('contextmenu', event => event.preventDefault());

  detectDevTools(); // Run on page load immediately
  setInterval(detectDevTools, 100); // Keep checking
})();
