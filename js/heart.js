window.onload = function() {
      const startDate = new Date("2023-10-10");
      const currentDate = new Date();
      
      function calculateElapsedTime(startDate, currentDate) {
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();
        let days = currentDate.getDate() - startDate.getDate();
        
        if (days < 0) {
          months--;
          days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
        
        if (months < 0) {
          years--;
          months += 12;
        }
    
        return `${years} year, ${months} month(s), ${days} day(s)`;
      }
      
      const timeElapsedElement = document.getElementById("timeElapsed");
      timeElapsedElement.textContent = calculateElapsedTime(startDate, currentDate);
    };
    