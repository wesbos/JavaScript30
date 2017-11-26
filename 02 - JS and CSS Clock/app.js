const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setTime() {
  const now = new Date;
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((seconds / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
}

setInterval(setTime, 1000);
