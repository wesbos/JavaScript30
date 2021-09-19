const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const initDegree = 90;
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);