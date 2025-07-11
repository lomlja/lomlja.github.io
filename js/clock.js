function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      
      // Determine AM or PM
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? String(hours).padStart(2, '0') : '12'; // The hour '0' should be '12'
      
      // Update the clock display
      document.getElementById('clock').textContent = `${hours}:${minutes} ${ampm}`;
  }
  
  // Initialize the clock when the page loads
  updateClock();
  function updateDate() {
      const now = new Date();
      const day = now.getDate();  // Get the current day of the month
      
      document.getElementById('date-circle').textContent = day;  // Set the day inside the circle
  }
  
  // Call the updateDate function when the page loads
  updateDate();
  