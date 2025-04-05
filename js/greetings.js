function updateGreeting(name) {
    const greetingElement = document.getElementById("greeting");
  
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDate();
  
    // Determine the greeting
    let greeting;
    if (day === 10) {
        greeting = `HAPPY ANNIVERSARY, ${name}!`;
    } else if (hours >= 0 && hours < 5) {
        greeting = `Good Night, ${name}!`;
    } else if (hours >= 5 && hours < 12) {
        greeting = `Good Morning, ${name}!`;
    } else if (hours >= 12 && hours < 17) {
        greeting = `Good Afternoon, ${name}!`;
    } else if (hours >= 17 && hours <= 23) {
        greeting = `Good Evening, ${name}!`;
    }
  
    // Update the greeting
    greetingElement.textContent = greeting;
}
