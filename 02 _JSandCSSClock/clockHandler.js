console.log('02 - JS and CSS Clock');
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setHandTransform = (element, degrees) => element.style.transform = `rotate(${degrees}deg)`;

const calculateDegrees = (time, max, offset = 0) => ((time / max) * 360) + offset + 90;

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = calculateDegrees(seconds, 60);
  setHandTransform(secondHand, secondsDegrees)
  
  const minutes = now.getMinutes()
  const minutesDegrees = calculateDegrees(minutes, 60,);
  console.log(minutes, minutesDegrees);
  setHandTransform(minsHand, minutesDegrees);

  const hours = now.getHours();
  const hoursDegrees = calculateDegrees(hours, 12);
  setHandTransform(hourHand, hoursDegrees);
}


setInterval(setDate, 1000);
setDate();