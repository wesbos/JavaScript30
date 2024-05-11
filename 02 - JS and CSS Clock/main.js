// Select the HTML elements for the hour, minute, and second hands
const hours = document.querySelector(".hour-hand");
const minutes = document.querySelector(".min-hand");
const seconds = document.querySelector(".second-hand");

// Add an event listener for when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Log the selected elements to the console
  console.log(hours, minutes, seconds);

  // Define a function called 'clock' that will update the position of the clock hands
  function clock() {
    // Create a new Date object to get the current time
    const time = new Date();

    // Get the current hour, minute, and second
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    console.log(hour, min, sec);

    // Rotate the hour hand by the number of degrees corresponding to the current hour
    // The hour hand rotates 360 degrees in 12 hours, so each hour is 30 degrees
    hours.style.transform = `rotate(${(hour % 12) * 30 + 90}deg)`;

    // Rotate the minute hand by the number of degrees corresponding to the current minute
    // The minute hand rotates 360 degrees in 60 minutes, so each minute is 6 degrees
    minutes.style.transform = `rotate(${min * 6 + 90}deg)`;

    // Rotate the second hand by the number of degrees corresponding to the current second
    // The second hand rotates 360 degrees in 60 seconds, so each second is 6 degrees
    seconds.style.transform = `rotate(${sec * 6}deg)`;
  }

  // Call the 'clock' function every 1000 milliseconds (or 1 second)
  setInterval(clock, 1000);
});
