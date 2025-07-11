function updateDateTime() {
    const currentDateTime = new Date();
    const day = currentDateTime.getDate();
    const month = currentDateTime.toLocaleString('default', { month: 'short' });
    const year = currentDateTime.getFullYear();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    document.getElementById('dateNumber').innerText = day;
    document.getElementById('dateMonthYear').innerText = `${month}, ${year}`;
    document.getElementById('currentTime').innerText = currentDateTime.toLocaleString(undefined, options);

    // Calculate the duration since October 10, 2023
    const startDate = new Date('2023-10-10');
    const yearsDiff = currentDateTime.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDateTime.getMonth() - startDate.getMonth();

    // Display the duration
    document.getElementById('durationBox').innerText = `${yearsDiff} year, ${monthsDiff} months of LOVE`;
}

// Update the date and time on load
updateDateTime();
