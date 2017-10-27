const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const rotateHand = (degrees) => {
  return `rotate(${degrees}deg)`;
};

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;

  secondHand.style.transform = rotateHand(secondDegrees);
  minuteHand.style.transform = rotateHand(minuteDegrees);
  hourHand.style.transform = rotateHand(hourDegrees);
};

setInterval(setDate, 1000);
setDate();
