const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if (seconds === 0) {
    secondHand.style.transition = "all 0s";
  };
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  if (minutes === 0) {
    minHand.style.transition = "all 0s";
  };
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  if (hours === 0) {
    hourHand.style.transition = "all 0s";
  };
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
