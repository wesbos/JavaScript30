const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

console.log(secondHand);
const moveClocks = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (seconds === 0) {
    secondHand.style.transition = "all 0s";
  }

  const minute = now.getMinutes();
  const minutesDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  if (minutes === 0) {
    minuteHand.style.transition = "all 0s";
  }

  const hour = now.getHours();
  const hoursDegrees = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  if (hours === 0) {
    hourHand.style.transition = "all 0s";
  }
};

setInterval(moveClocks, 1000);
