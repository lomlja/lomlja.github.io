const passwordRedirects = {
  '000111': 'AuTFQGq0Zc2N9Dh0Cm9p79I6T/asmrdeletechats.html',
  '160307': 'Jt4r0SJ4N9bFWT0Sa1M5uOiFW/index.html',
  '281208': 'AuTFQGq0Zc2N9Dh0Cm9p79I6T/index.html',
  'tg': 'https://web.telegram.org/',
  'insta': 'https://instagram.com/',
  'twelve': 'https://twelvesites.github.io',
  'cgpt': 'https://chatgpt.com/'
};

setTimeout(() => {
  const logo = document.getElementById('logo');
  const formContainer = document.getElementById('formContainer');

  if (logo) logo.classList.add('top-center');
  if (formContainer) formContainer.classList.add('visible');
}, 1300);

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;
  const formContainer = document.getElementById('formContainer');
  const statusText = document.getElementById('statusText');

  if (passwordRedirects[password]) {
    window.location.href = passwordRedirects[password];
  } else {
    statusText.textContent = "Try again!";
    statusText.classList.add('error');

    // Restart shake animation
    formContainer.classList.remove('shake');
    void formContainer.offsetWidth; // Force reflow
    formContainer.classList.add('shake');

    formContainer.addEventListener('animationend', () => {
      formContainer.classList.remove('shake');

      // Keep message for 3 seconds before resetting
      setTimeout(() => {
        statusText.textContent = "Please enter your password";
        statusText.classList.remove('error');
      }, 3000);
      
    }, { once: true });
  }

  return false;
}
