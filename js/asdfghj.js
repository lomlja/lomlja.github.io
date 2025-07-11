(function() {
  let devtoolsOpen = false;

  function detectDevTools() {
    const threshold = 100;

    const sizeCheck = (window.outerWidth - window.innerWidth > threshold) || 
                      (window.outerHeight - window.innerHeight > threshold);

    let debuggerDetected = false;
    const start = Date.now();
    debugger;
    if (Date.now() - start > 100) debuggerDetected = true;

    const isOpen = sizeCheck || debuggerDetected;

    if (isOpen && !devtoolsOpen) {
      devtoolsOpen = true;
      console.warn("🛑 DevTools detected! Redirecting...");
      window.location.href = "../inspect-detected.html";
    }
  }

  function isMobile() {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  }

  if (!isMobile()) {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }

  detectDevTools();
  setInterval(detectDevTools, 100);
})();
