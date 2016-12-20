'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees  = ((seconds  / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = ((mins / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
