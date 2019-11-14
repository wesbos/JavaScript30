const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

function getTime() {
    const now = new Date();

    const hour = now.getHours();
    const hourDegrees = hour * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = min * 6 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const sec = now.getSeconds();
    const secDegrees = sec * 6 + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    
  }

setInterval(getTime, 1000);